<h1>
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="frontend/src/resources/logo-light.svg">
    <img src="frontend/src/resources/logo-dark.svg" alt="Headlamp">
  </picture>
</h1>

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/7551/badge)](https://www.bestpractices.dev/projects/7551)
[![OpenSSF Scorecard](https://api.scorecard.dev/projects/github.com/headlamp-k8s/headlamp/badge)](https://scorecard.dev/viewer/?uri=github.com/headlamp-k8s/headlamp)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fheadlamp-k8s%2Fheadlamp.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Fheadlamp-k8s%2Fheadlamp?ref=badge_shield)

Headlamp는 사용하기 쉽고 확장 가능한 Kubernetes 웹 UI입니다.

Headlamp는 일반적인 웹 UI와 대시보드의 기능셋에 추가적인 기능을 포함하기 위해 만들어졌습니다.

<div align="center">
  <img src="https://raw.githubusercontent.com/headlamp-k8s/headlamp/screenshots/videos/headlamp_quick_run.gif" width="80%">
</div>

## 기능

- 벤더 독립적 / 일반적인 Kubernetes UI
- 클러스터 내에서 또는 로컬에서 데스크탑 앱으로 작동
- 다중 클러스터
- 플러그인을 통한 확장 가능
- 사용자 권한을 통한 UI 제어 (허용되지 않는 경우 삭제/업데이트 불가)
- 현대적인 사용자 인터페이스
- 생성/수정/삭제 작업 취소 가능
- 로그, exec 및 문서화된 리소스 편집기 제공

## 스크린샷

<table>
    <tr>
        <td width="33%"><img src="https://raw.githubusercontent.com/headlamp-k8s/headlamp/screenshots/screenshots/home.png"></td>
        <td width="33%"><img src="https://raw.githubusercontent.com/headlamp-k8s/headlamp/screenshots/screenshots/cluster_chooser.png"></td>
    </tr>
    <tr>
        <td width="33%"><img src="https://raw.githubusercontent.com/headlamp-k8s/headlamp/screenshots/screenshots/workloads.png"></td>
        <td width="33%"><img src="https://raw.githubusercontent.com/headlamp-k8s/headlamp/screenshots/screenshots/resource_edition.png"></td>
    </tr>
    <tr>
        <td width="33%"><img src="https://raw.githubusercontent.com/headlamp-k8s/headlamp/screenshots/screenshots/logs.png"></td>
        <td width="33%"><img src="https://raw.githubusercontent.com/headlamp-k8s/headlamp/screenshots/screenshots/terminal.png"></td>
    </tr>
</table>

## 빠른 시작

클러스터에 Headlamp를 배포하려면 [클러스터 내에서 실행](https://headlamp.dev/docs/latest/installation/in-cluster/)에 대한 지침을 확인하십시오.

이미 kubeconfig가 있는 경우 [데스크탑 애플리케이션](https://headlamp.dev/docs/latest/installation/desktop/)으로 Headlamp를 로컬에서 빠르게 시도해 볼 수 있습니다.
[Linux](https://headlamp.dev/docs/latest/installation/desktop/linux-installation),
[Mac](https://headlamp.dev/docs/latest/installation/desktop/mac-installation),
또는 [Windows](https://headlamp.dev/docs/latest/installation/desktop/win-installation)용으로 사용할 수 있습니다.
**반드시** kubeconfig 파일을 기본 경로에 설정하여 Headlamp가 이를 사용할 수 있도록 하십시오.

### 접근

Headlamp는 리소스에 대한 사용자의 접근을 확인하기 위해 [RBAC](https://kubernetes.io/docs/reference/access-authn-authz/rbac)을 사용합니다.
권한이 제한된 토큰으로 Headlamp를 사용하면 클러스터 리소스를 올바르게 확인할 수 없습니다.

클러스터에 대한 서비스 계정 토큰을 얻는 방법에 대해 다음 문서를 참조하십시오. [서비스 계정 토큰 생성](https://headlamp.dev/docs/latest/installation#create-a-service-account-token).

## 테스트된 플랫폼

Headlamp와 함께 테스트한 [Kubernetes 플랫폼](./docs/platforms.md) 목록을 유지 관리하고 있습니다.
누락된 플랫폼을 추가하거나 기존 플랫폼에 대한 회귀 테스트 결과가 있는 경우 의견을 남겨주시기 바랍니다.

## 확장 / 플러그인

사용 사례에 맞게 Headlamp를 조정하는 데 관심이 있다면, [플러그인 개발 가이드](https://headlamp.dev/docs/latest/development/plugins/)를 확인하십시오.

## 참여하기

다음을 확인하십시오:
- [가이드라인](https://headlamp.dev/docs/latest/contributing/)
- [행동 강령](./CODE_OF_CONDUCT.md)
- Kubernetes Slack의 [#headlamp](https://kubernetes.slack.com/messages/headlamp) 채널
- [월간 커뮤니티 회의](https://zoom-lfx.platform.linuxfoundation.org/meetings/headlamp)

## 로드맵 / 릴리스 계획

프로젝트의 방향에 관심이 있으신 분들을 위해 [로드맵](https://github.com/orgs/headlamp-k8s/projects/1/views/1)을 관리하고 있습니다.
여기에는 지금까지 계획된 가장 큰 변경 사항과 각 릴리스를 추적하는 [보드](https://github.com/orgs/headlamp-k8s/projects/1/)가 있습니다.

## 라이선스

Headlamp는 [Apache 2.0](./LICENSE) 라이선스 조건에 따라 배포됩니다.

## 자주 묻는 질문

Headlamp에 대한 자세한 내용은 [Headlamp FAQ](https://headlamp.dev/docs/latest/faq/)를 참조하십시오.
