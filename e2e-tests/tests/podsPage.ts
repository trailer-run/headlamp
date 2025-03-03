import { expect, Page } from '@playwright/test';

export class podsPage {
  constructor(private page: Page) {}

  async navigateToPods() {
    await this.page.click('span:has-text("Workloads")');
    await this.page.waitForLoadState('load');
    await this.page.waitForSelector('span:has-text("Pods")');
    await this.page.waitForLoadState('load');
    await this.page.click('span:has-text("Pods")');

    console.log('Now on the pods page');
  }

  async createPod(name) {
    const yaml = `
apiVersion: v1
kind: Pod
metadata:
  name: ${name}
spec:
  containers:
  - name: nginx
    image: nginx:1.14.2
    ports:
    - containerPort: 80
    `;
    const page = this.page;

    // If the pod already exists, return.
    // This makes it a bit more resilient to flakiness.
    const pageContent = await this.page.content();
    if (pageContent.includes(name)) {
      return;
    }

    await expect(page.getByRole('button', { name: 'Create' })).toBeVisible();
    await page.getByRole('button', { name: 'Create' }).click();

    await page.waitForLoadState('load');

    await expect(page.getByText('Use minimal editor')).toBeVisible();
    await page.getByText('Use minimal editor').click();

    await page.waitForLoadState('load');
    await page.fill('textarea[aria-label="yaml Code"]', yaml);

    await expect(page.getByRole('button', { name: 'Apply' })).toBeVisible();
    await page.getByRole('button', { name: 'Apply' }).click();

    await page.waitForSelector(`text=Applied ${name}`);

    const podLink = page.getByRole('link', { name: name });
    try {
      await podLink.waitFor({ state: 'visible', timeout: 10000 });
    } catch (error) {
      await page.reload({ waitUntil: 'networkidle' });
    }
    await expect(podLink).toBeVisible();

    console.log(`Created pod ${name}`);
  }

  async deletePod(name) {
    const page = this.page;

    await page.click('span:has-text("Pods")');
    await page.waitForLoadState('load');
    await page.waitForSelector(`a:has-text("${name}")`);

    await expect(page.getByRole('link', { name: name })).toBeVisible();
    await page.getByRole('link', { name: name }).click();

    await expect(page.getByRole('button', { name: 'Delete' })).toBeVisible();
    await page.getByRole('button', { name: 'Delete' }).click();

    await page.waitForSelector(`text=Are you sure you want to delete item ${name}?`);

    await expect(page.getByRole('button', { name: 'Yes' })).toBeVisible();
    await page.getByRole('button', { name: 'Yes' }).click();

    await page.waitForSelector(`text=Deleted item ${name}`);

    console.log(`Deleted pod ${name}`);
  }

  async confirmPodCreation(name) {
    const podLink = this.page.locator(`a:has-text("${name}")`);
    try {
      await podLink.waitFor({ state: 'visible', timeout: 10000 });
    } catch (error) {
      await this.page.reload({ waitUntil: 'networkidle' });
    }
    await expect(podLink).toBeVisible();

    console.log(`Pod ${name} is running`);
  }

  async confirmPodDeletion(name) {
    const podLink = this.page.locator(`a:has-text("${name}")`);
    try {
      await podLink.waitFor({ state: 'hidden', timeout: 10000 });
    } catch (error) {
      await this.page.reload({ waitUntil: 'networkidle' });
    }
    await expect(podLink).not.toBeVisible();

    console.log(`Pod ${name} is deleted`);
  }
}
