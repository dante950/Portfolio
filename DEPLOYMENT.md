# 포트폴리오 검증 배포

- Site ID: `appgprj_6ad38ad45c308191a3d7ac12627d6328`
- 배포 주소: https://koh-game-planner-preview.hjk235244.chatgpt.site
- 시뮬레이터 주소 https://dante950.github.io/ 는 별개이며 변경하지 않습니다.
- 배포용 복사본: `sites/portfolio-preview/`
- 개발 원본: 이 폴더의 `src/`, `public/` 등 기존 파일

## 이후 작업 방식

### 메인 소개·LUNA·몬스터 헤어 살롱 상세 배포 완료 — 2026-10-18 (한국 시간)

- 사용자 요청: 현재까지 수정한 내용 배포, 로그인 후 배포 및 공개 반영 확인.
- 배포 소스: `29a89d02d74e81d1f12c12e2ccbecc116de18e15`.
- GitHub Actions: https://github.com/dante950/Portfolio/actions/runs/39137344486 — build / deploy 성공.
- 공개 주소: https://dante950.github.io/Portfolio/#home
- 포함: 메인 기획자 소개, LUNA 역할·시뮬레이터·콘텐츠 및 그래픽 협업 증빙·대표 이미지·팀 성과, 몬스터 헤어 살롱의 중간 합류·재구성·기믹과 파훼·설득 및 검증 과정과 엔진 구현 단계 설명.
- 검증: 공개 번들의 최신 문구와 영상 ID 확인, LUNA 이미지·GIF·영상 42개 HTTP 200 및 파일 크기 일치, 공개 메인 및 두 프로젝트 상세 표시와 대표 이미지 로딩 확인.
- 배포 실행은 로그인된 GitHub 브라우저에서 진행했습니다. 저장된 인증정보를 직접 읽는 방식은 사용하지 않습니다.
- 이 기록은 배포 후 추가한 문서입니다. 이후 수정은 로컬에서 진행하고 사용자가 배포를 요청할 때 게시합니다.

### 킹덤러쉬·스톰빌성 상세 및 자료 링크 배포 완료 — 2026-10-18 (한국 시간)

- 사용자 요청: 현재까지 반영한 내용 배포.
- 배포 소스: `07283bcdc7fba57a89ae939eec24fc9fe710f300`.
- GitHub Actions: https://github.com/dante950/Portfolio/actions/runs/39107862958 — success.
- 공개 주소: https://dante950.github.io/Portfolio/#home
- 포함: 킹덤러쉬 영웅 분석·신규 영웅 기획, 스톰빌성 조사·도면·대표 분석 사례, 상세 목차 개선, 이벤트·미용·전투·킹덤러쉬·스톰빌성 자료 표와 Google Drive 링크.
- 검증: TypeScript 검사와 빌드 통과. 공개 번들에서 최신 문구 및 자료 링크 12개 확인, 상세 이미지 49개 HTTP 200 확인. 공개 스톰빌성 페이지 표시 확인.
- 이 기록은 배포 후 추가한 문서입니다. 다음 수정은 로컬에서 진행하고 사용자가 배포를 요청할 때 게시합니다.

### 종강 글자 수집 이벤트 상세 배포 완료 — 2026-10-18 (한국 시간)

- 사용자 요청: 여기까지 배포하고 이후 작업은 다음에 진행.
- 배포 소스: `c8ef440d68000eb4011f11bed302b85173ffbcaa`.
- GitHub Actions: https://github.com/dante950/Portfolio/actions/runs/39068035425 — build / deploy 모두 success.
- 공개 상세 페이지: https://dante950.github.io/Portfolio/#/works/semester-event
- 포함: 기획 배경·시스템 규칙·8개 테이블 구조·JSON 예시·자료 대조 내용, 원본 화면 6개, PPTX·XLSX·JSON ZIP 다운로드.
- 검증: 공개 HTML과 최신 번들 정상 응답 및 새 본문 포함 확인. 이미지 6개와 자료 파일 3개 정상 응답. 기존 시뮬레이터 저장소와 Pages 설정 변화 없음.
- 이 기록은 배포 이후 추가한 문서이며, 웹사이트 소스는 위 배포 커밋과 같습니다. 다음 수정은 로컬에서 진행하고 사용자가 배포를 요청할 때 게시합니다.

2026-10-18 사용자 요청에 따라 앞으로의 배포 대상은 별도 GitHub 저장소 `dante950/Portfolio`의 GitHub Pages입니다. 공개 주소는 `https://dante950.github.io/Portfolio/#home`입니다. 기존 루트의 통합 시뮬레이터는 수정하지 않습니다.

수정과 검수는 기존 로컬 폴더에서 진행합니다. `.github/workflows/deploy-pages.yml`은 `workflow_dispatch`로만 실행되며, 로컬 수정이나 GitHub push만으로 배포되지 않습니다. 사용자가 배포를 요청하면 검수한 소스를 GitHub에 올리고 해당 워크플로를 실행합니다. GitHub 연결 및 첫 배포 완료 여부는 아래 준비 상태를 확인합니다.

기존 Sites 공개 주소는 마지막 배포 버전을 유지합니다. Sites를 다시 업데이트하려면 사용자가 해당 주소로의 배포를 요청했는지 확인합니다.

### GitHub Pages 연결 및 첫 배포 완료

- 공개 저장소 `https://github.com/dante950/Portfolio` 생성 및 현재 개발 폴더의 `origin` 연결 완료. 기본 브랜치는 `main`입니다.
- 첫 배포: 2026-10-18 (한국 시간), GitHub Actions https://github.com/dante950/Portfolio/actions/runs/39052719721 — success.
- 배포 소스 커밋: `dd088c02157c8980b2879c55b025160088fa5230`. 이후 배포 안내 문서와 로컬 실행 파일만 추가한 커밋은 별도 배포가 필요하지 않습니다.
- 검증: GitHub Actions의 설치·TypeScript 검사·빌드·게시 모두 성공. 공개 홈과 미용 시스템 상세 페이지 표시, JS/CSS 정상 응답 및 최신 문구/자료 링크 포함, 이미지 9개 정상 응답 확인.
- 기존 시뮬레이터의 기본 브랜치 HEAD `8a3ec1100386fea48f08e5096951a6d0da6e3b9f`, Pages 공개 주소·게시 방식·원본 브랜치 설정이 작업 전후 동일하며 루트 주소 HTTP 200을 확인했습니다.
- 기존 `base: "./"` 설정으로 `/Portfolio/` 하위 경로에서도 스크립트·스타일·이미지를 상대 경로로 불러옵니다.
- `#home`은 이미 첫 화면 최상단으로 연결됩니다. `#career`는 프로젝트 영역, `#/works`는 작업 목록, `#/works/monster-hair-system`은 미용 시스템 상세입니다.
- Pages → Source는 GitHub Actions로 설정됐습니다. `dante950.github.io` 저장소를 배포 대상으로 사용하지 않습니다.
- 업로드 대상: `src/`, `public/`, `scripts/`, `.github/workflows/`, 의존성 잠금 파일과 프로젝트 설정 파일. 로컬 참고 자료, Sites 복사본·설정, 캐시, 단일 HTML은 제외합니다.
- 배포 명령은 GitHub Actions → Deploy portfolio to GitHub Pages → Run workflow입니다. 실행된 버전과 성공 여부를 확인한 뒤 공개 주소를 검증합니다.

배포 복사본에는 개발 원본과 빌드 결과만 복사합니다. `reference-source/`, 원본 참고 사이트 ZIP, `node_modules/`, 단일 HTML 미리보기, 로컬 캐시를 업로드하지 않습니다. `.openai/hosting.json`의 Site ID는 유지하고 새 Site를 만들지 않습니다.

## 검증 배포 완료

- 배포 일시: 2026-10-17 (UTC)
- 저장 버전: 1
- Version ID: `appgprj_6ad38ad45c308191a3d7ac12627d6328~appgver_c80a301ee76081918f0bc28cab37f607`
- Deployment ID: `appgdep_6ad38c55db3c8191ad13d8a182c045f9`
- Source commit: `bd3a0e4391ebaa9a4d56dcbbf6892fcc3c9f9d0f`
- 결과: succeeded
- 공개 범위: 링크가 있으면 누구나 열람 가능
- 공개 주소 검증: 홈과 상세 페이지 로딩 확인. YouTube 시뮬레이터 영상은 재생 시간 증가 및 재생 중 상태 확인(오류 153 없음).

## 중간 업데이트 배포 완료 — 2026-10-18 (한국 시간)

- 사용자 요청: 여기까지 배포
- 저장 버전: 2
- Version ID: `appgprj_6ad38ad45c308191a3d7ac12627d6328~appgver_8d7c245adcd88191a94d7df01a1b414a`
- Deployment ID: `appgdep_6ad39418040c8191b5b7fa9b63cc28dc`
- Source commit: `aea632c0b88d4cdf0a8d4d3358eae6399b93ceaa`
- 결과: succeeded (공개 범위 유지)
- 포함: 실제 빌드 캡처 2장과 제자리 확대 호버, 대사/하루 마감 이미지 교체, 흐름도 및 지정 안내 문장 삭제
- 검증: 공개 HTML의 최신 JS/CSS 파일명 일치, 새 PNG 4장 HTTP 200 및 이미지 형식 확인, 삭제 문구가 배포 번들에 없는 것 확인
- 이후 수정은 다시 로컬에서 진행하며, 사용자가 다음 배포를 요청할 때 업데이트합니다.

## 미용 시스템 상세 업데이트 배포 완료 — 2026-10-18 (한국 시간)

- 사용자 요청: 여기까지 수정한 내용 배포
- 저장 버전: 3
- Version ID: `appgprj_6ad38ad45c308191a3d7ac12627d6328~appgver_d8e6b55b072c81918a69c2dd9e599968`
- Deployment ID: `appgdep_6ad3aa5bb1cc8191aa5216aeb77a1412`
- Source commit: `09a71f06af2722a677b9810381c32ce903c2f215`
- 결과: succeeded (공개 범위 유지)
- 포함: 몬스터 미용 시스템 상세 내용 정리, 기획서 원본 이미지와 표정 안내 이미지, 자료 폴더 링크 및 문구/간격 수정, 좀비 아이콘, 작업 아카이브 3개 추가
- 검증: 빌드 성공, 배포본의 상세 이미지 9개 존재 및 자료 링크/최종 문구 확인, Sites 배포 성공 상태 확인
- 이후 수정은 다시 로컬에서 진행하며, 사용자가 다음 배포를 요청할 때 업데이트합니다.
