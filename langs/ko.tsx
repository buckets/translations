import * as React from 'react'

import { ILangPack } from './i18n_ifaces'
import { IMessages } from './base'

// Contributors, include your name and optionally a link to
// a website as you want it to appear in any credits.
const contributors = [
  // {
  //   name: "",
  //   href: "", /* optional */
  // },
];

const messages:IMessages = {
  "\n        Though filling out this form is preferrable, you can also email bugs@budgetwithbuckets.com\n      ": {
    val: "\n        이 양식을 작성하는 것이 더 좋지만, bugs@budgetwithbuckets.com으로 이메일도 보낼 수 있습니다.\n      ",
    translated: "auto",
    h: "05fPQ/cX0e4UXnYsbNTo8b6FUwq/WZ1URc7ixr6WlV8=",
  },
  "(Blank)": {
    /* Label for things that are blank */
    /* Label for things that are blank */
    val: "(빈)",
    translated: "auto",
    h: "zYRwxSqiVmaHvp3Ra8DQeYHJW50oqXUf4Jz4UvXRs4U=",
  },
  "(Drop files or click)": {
    val: "(파일을 드롭하거나 클릭)",
    translated: "auto",
    h: "cn8vjUpkolK+X1qsHPyR11Qj7uQWZVR6eWnhPRb/zfw=",
  },
  "(If you want a response)": {
    val: "(만약 응답을 원하시면)",
    translated: "auto",
    h: "Ij4mQm0L5WO4Iunvl3fKwbhLwjTodc3Chq81GsFM+T0=",
  },
  "(easiest)": {
    val: "(가장 쉬운)",
    translated: "auto",
    h: "mvpASP1TOoS7w7iXoO7ThUyiPKnrtytWyDC2XJ1WReE=",
  },
  "(optional)": {
    val: "(선택적)",
    translated: "auto",
    h: "njVpYkgCdiB755Pxnsk1D8GELOWqw1mBBYG+YQr7e98=",
  },
  "/mo": {
    val: "월",
    translated: "auto",
    h: "ggq7na5vMB1wOjQQo0Wq0o7ctwbMUiiJr1tRRKphHss=",
  },
  "A sync is already in progress": {
    val: "동기화가 이미 진행 중입니다",
    translated: "auto",
    h: "z6CqgxENo0xxB0LPp8P8rmnLPp1m2NElecEaJM8GDfI=",
  },
  "About Buckets": {
    /* 'Buckets' refers to the application name */
    val: "Buckets 정보",
    translated: "auto",
    h: "9bzPsx+kCkNUeLTSVjaygyWCkm3VCdsFaAFRvdS+xEU=",
  },
  "Accept EULA": {
    val: "EULA 수락",
    translated: "auto",
    h: "2TWZMBgBGQU/CoeXRW5NR1b0AT4yW/zrLyRpUGWBQn8=",
  },
  "Account": {
    val: "계정",
    translated: "auto",
    h: "ihCgI4A9UaFZ63kuiKXqFHoGsze2dYwzpgSVU0clMfQ=",
  },
  "Account Transactions": {
    val: "계좌 거래",
    translated: "auto",
    h: "GPJhFDki3xJdCOMqCkqdUDX7SfEZcg9wGee8KMIuIno=",
  },
  "Account and transactions deleted": {
    val: "계정과 거래가 삭제되었습니다",
    translated: "auto",
    h: "iwS2+dAqfDOEtU5SUm1d1oPFTe0+JT5NCm4nH2SrglE=",
  },
  "Account closed": {
    val: "계정 폐쇄",
    translated: "auto",
    h: "l9xs5wLKF3KIgunL1SJh9r9XDYpWkC7LYrL4KUUFm3M=",
  },
  "Account deleted completely": {
    val: "계정이 완전히 삭제되었습니다",
    translated: "auto",
    h: "LswJ+SxzkHRVy6+Et4Wga6r/Io1P6MBlTiwdjUAUj48=",
  },
  "Account mapping": {
    /* Noun describing import details that map to an account */
    val: "계정 매핑",
    translated: "auto",
    h: "utrzN1AM7WMltloEYtQSoFhx5O5Zf4u6M2p33kntCXM=",
  },
  "Accounts": {
    val: "계정",
    translated: "auto",
    h: "1oHDkv2zB1yiCABVTWBY5oX4Ccu36nJBCG7Q+JVg8TA=",
  },
  "Accounts in side bar": {
    val: "사이드바의 계정",
    translated: "auto",
    h: "BsDoJS2nPDKya2do9fNF2o2jl0mIUxjdBycHbmsu6HY=",
  },
  "Action": {
    val: "행동",
    translated: "auto",
    h: "XvzB5DfL6tpSZT8TMSHzyiWbhLdKUeFcJ3tN6T8RvXU=",
  },
  "Actions": {
    val: "작업",
    translated: "auto",
    h: "qm2CvbPMHZpeVCriZp/vJ2kAGatdeyDxfZ8TMaapQvo=",
  },
  "Activity": {
    /* Noun, label for a bucket's usage (income/expenses) for a period */
    val: "활동",
    translated: "auto",
    h: "jfKSYDWvDxzcenHtImEM9HokIu7tBJbMki25BNTynTI=",
  },
  "Actual Size": {
    val: "실제 크기",
    translated: "auto",
    h: "k1ZfUj7bmT4XwiALRlZo7ztl2d+e7JcLt3WCnvjpBYg=",
  },
  "Advanced settings": {
    val: "고급 설정",
    translated: "auto",
    h: "oQ0ic6e7zWfGl55WCEVG2QbtvynCSY0WyVPEdEA15q4=",
  },
  "Agreements": {
    /* Label for page with Terms of Use type agreements */
    val: "약관",
    translated: "auto",
    h: "RJ//uETg43dMDTum+jM/26gJUl1X/TzlcrmBmETZxtc=",
  },
  "All Files": {
    /* Label for letting users select any file for import regardless of extension */
    /* Label for letting users select any file for import regardless of extension */
    /* Label for letting users select any file for import regardless of extension */
    /* Label for letting users select any file for import regardless of extension */
    val: "All Files",
    translated: "auto",
    h: "xP+YqxC7o4/NEWANvugOAGzJXIF368ZNwle6rV7nVRg=",
  },
  "Allow new connections": {
    val: "새로운 연결 허용",
    translated: "auto",
    h: "MGoLxui/5J17owbWiAA17QPnQkrBZ2bExUfiXFBaC+8=",
  },
  "Amount": {
    val: "금액",
    translated: "auto",
    h: "DHNNaJF4hWTWIFdaMdMhUT4aSdti7ZfaNexABzxWWzc=",
  },
  "Amount of money over-allocated in buckets.": {
    val: "버킷에 초과 배정된 금액",
    translated: "auto",
    h: "kFucvPefN9Kae7dArnle8i0rTZZq1U+3d8w81lDNVKw=",
  },
  "Analysis": {
    val: "분석",
    translated: "auto",
    h: "+LNAOPSLW2rpFCrT+U1suhdnoYyZa1k8ALddRlddDlI=",
  },
  "Animation": {
    /* Label for application preference enabling/disabling animations */
    val: "애니메이션",
    translated: "auto",
    h: "Vk4XaMgXNIEY4+Gcal1n+qdnamgr4Q5af/+wzFRoIHU=",
  },
  "Any other monthly bills you have?": {
    val: "다른 월간 청구서가 있나요?",
    translated: "auto",
    h: "rmA9D10bvYOVj3U4kE7U6jALpz7WpqBJTv6HZaI4T/M=",
  },
  "App Settings": {
    val: "앱 설정",
    translated: "auto",
    h: "bk/DqvzHJTuksZnC0cWC2+KPOwsnilgNjXSPLv1SbPA=",
  },
  "As of": {
    /* Label for timestamp on a document */
    val: "As of",
    translated: "auto",
    h: "AONctcFQnUGl+zc/NhrnGa7CfTpqu3E92stXUc93EEU=",
  },
  "Assets": {
    val: "자산",
    translated: "auto",
    h: "VBLBowZo0Lx8GWGbWVcEEFzSxnwQmcEOSxwtD5yIhwQ=",
  },
  "Attached files are too large.": {
    val: "첨부된 파일이 너무 큽니다.",
    translated: "auto",
    h: "HfDI7uw+P4uLUPkDu0rxQhxJqjqcriWmD9EWYaiUqvY=",
  },
  "Authenticated": {
    val: "인증됨",
    translated: "auto",
    h: "qFkX9LG17MNSZOEH8+oXRLvO9La2Ph/uzSCZn7/FPHg=",
  },
  "Authenticating": {
    val: "인증 중",
    translated: "auto",
    h: "7Sf5Nv5dGmsCdcFHDTi6IdPNrr7sui7KirEdQpUMd7I=",
  },
  "Authentication": {
    val: "인증",
    translated: "auto",
    h: "NAlBsTsQWu6FaPj3Q2Iyd12M/7PEA4UYqE+gj4dHkZA=",
  },
  "Automatic": {
    /* Option for theme preference indicating that the system will choose between light and dark */
    val: "자동",
    translated: "auto",
    h: "0YA2t1ssPk8k4xaICpB9//fM3ol0d/FeOVb6dCD0ux8=",
  },
  "Available version": {
    /* Label for version available to upgrade Buckets to */
    val: "사용 가능한 버전",
    translated: "auto",
    h: "dPTYVfj33eBbVAOPN62sq/SkzXeFqTiSSeGbq7RT8ns=",
  },
  "Avenue available": {
    val: "번가 사용 가능",
    translated: "auto",
    h: "0ZTppZemkrqVd6lIxbRj8UJat3meVAiWkM22EaiH5eg=",
  },
  "Avenue closed": {
    val: "애비뉴 폐쇄",
    translated: "auto",
    h: "E7OVHGkfKw0NKIt4PXlc0AQqXkllTGiKAqnilsHEzUE=",
  },
  "Avenue opened": {
    val: "에비뉴가 열렸습니다",
    translated: "auto",
    h: "3UKUOWH4r70ixbYNjwWI7kEXLVPY/H62HsX7AypQ1D8=",
  },
  "Avenue type": {
    val: "애비뉴 유형",
    translated: "auto",
    h: "m88+08lu2BgvX8BFsKwDKo/bYeJbqlIkmK5GD9AbD9s=",
  },
  "Avenue unavailable": {
    val: "애비뉴 이용 불가",
    translated: "auto",
    h: "cDAq+7ZyrtyC7zRkvSBe9Ob6LBn4eVkqXRT7Y3Bau3U=",
  },
  "Avenues": {
    val: "대로",
    translated: "auto",
    h: "Jyyh8MGvKZoZXXZkPyMrHYEAAyTOt+V8Kao2KKQtS6k=",
  },
  "Avenues are what you use to connect your devices together so you can send your budget from one device to another.": {
    val: "에이븐뉴스는 기기를 서로 연결하여 하나의 기기에서 다른 기기로 예산을 보낼 수 있도록 사용하는 것입니다.",
    translated: "auto",
    h: "XbtezQPrPTjwRYWch5a1SMCG3WCcDTCs0PlLzxyPRcY=",
  },
  "Average": {
    val: "평균",
    translated: "auto",
    h: "zLxQhptvlIYtt0l/prvWMqnsQHh7N1gxh33WeorRi2w=",
  },
  "Avg:": {
    val: "평균:",
    translated: "auto",
    h: "EVMZyhHQEFPlI2ib8VqTJo25bJBk8gHsgZR1SZ2Jcj0=",
  },
  "Babysitting": {
    val: "베이비시팅",
    translated: "auto",
    h: "yOfOnHbye/Uhao1fb5jtfP4z0XPyc757kdBFt32Uwrc=",
  },
  "Backup file": {
    /* Label for backup file selector */
    val: "백업 파일",
    translated: "auto",
    h: "HF5523dI/DYBC0mgunrYA58CSFMjLy0eMYOIgDnftyQ=",
  },
  "Backup folder": {
    /* Label for application preference of which folder to use for automatic backups */
    val: "백업 폴더",
    translated: "auto",
    h: "BLOblCLkVxAs6HObgPraktoiBEQNMNFixnzpvk7FWoU=",
  },
  "Backups": {
    /* Label for backup preferences */
    val: "백업",
    translated: "auto",
    h: "2JCpk92cgO56Ebw/lZGjh81dIWUzHyTIthk3tbUO5SY=",
  },
  "Backups enabled": {
    /* Label for application preference enabling/disabling automated backups */
    val: "백업 활성화됨",
    translated: "auto",
    h: "Y9MhMpBC7vFMEGWhaOb2cH6gqp/6lHO1R2XRniiNYes=",
  },
  "Balance": {
    val: "균형",
    translated: "auto",
    h: "azvDWgVPY349dq4q8mbtpDhehRsFKYKNzMk/TcuOvEQ=",
  },
  "Bank macro": {
    val: "은행 매크로",
    translated: "auto",
    h: "IQmQZ/1/eVg9LLwOsnxkUbQGAcx9ZkBAlrP1Ch3Xo/c=",
  },
  "Basic settings": {
    val: "기본 설정",
    translated: "auto",
    h: "9/8gWH6aVupdwCUJFJ4KodEJWn4fFwbiASgh7oQcxPE=",
  },
  "Birthdays": {
    val: "생일",
    translated: "auto",
    h: "rzI9rIMV5VD86pAzRZf+uFAA8rWYhz1rIH5N9fDesSk=",
  },
  "Break Import Links": {
    val: "가져오기 링크 끊기",
    translated: "auto",
    h: "XQYKw3qJ7xKoR/DX6K6NdZxbJLHVJhxy9mFVV8r1ZU4=",
  },
  "Bring All to Front": {
    val: "모두 앞으로",
    translated: "auto",
    h: "vXNLSncC5dTsDdfhZY5dhbev+Y3PpqQEy1fwxTkGWU0=",
  },
  "Bucket": {
    val: "버킷",
    translated: "auto",
    h: "APPSgbsmF5H9B7YIJDaPcEVh4T7ctWU+hxQv/eG1Dg0=",
  },
  "Bucket Transaction ID": {
    val: "버킷 거래 ID",
    translated: "auto",
    h: "1bsbXV1Kuxj83UA24XCyscrAKm+nsN+WNbFz1+lf66E=",
  },
  "Bucket Transactions": {
    val: "버킷 거래",
    translated: "auto",
    h: "5hMoGWO5uTeCOujLdFnRx4w3D6Zka/avSxnH14UmJiI=",
  },
  "Bucket amount": {
    val: "버킷 양",
    translated: "auto",
    h: "KeOvMpoI1q2oV66HC3pMPPSZyZ3AfK3/ttog4A9oHTs=",
  },
  "Bucket deleted completely": {
    val: "버킷이 완전히 삭제되었습니다",
    translated: "auto",
    h: "gBMlSFTWDRRSWZeZ3fuxDhpJnhv2MoF3EvZSwo1BZHg=",
  },
  "Bucket group": {
    val: "버킷 그룹",
    translated: "auto",
    h: "SK6rZDww/r+lLW1JUMyv3SXYmxaP95hasIOTSW4WFZY=",
  },
  "Bucket transaction": {
    val: "버킷 트랜잭션",
    translated: "auto",
    h: "bEQDTy9m51uIwZj996XKffMPU91hkOBVlNOKpudB2hw=",
  },
  "Bucket type:": {
    val: "버킷 유형:",
    translated: "auto",
    h: "NMC+sjsH6UgNhNtiqYeiHDi4zDK/+S5h5yMfZ5CQk1c=",
  },
  "Buckets": {
    /* Bucket list page title.  Does NOT refer to the application name */
    /* Refers to a list of buckets, not the application title */
    /* Refers to a list of buckets, not the application title */
    val: "Buckets",
    translated: "auto",
    h: "fMPIWzGvVEG0t7+bZX1ucgzulk8FaQfqioLgwLsj+oE=",
  },
  "Buckets Budget Filename": {
    /* 'Buckets' refers to the application name */
    /* 'Buckets' refers to the application name */
    val: "버킷스 예산 파일 이름",
    translated: "auto",
    h: "PMqvee/qJsh/OYtRi+hbcH4fgl07SR6XM0wx4c1C+sU=",
  },
  "Buckets License": {
    /* 'Buckets' refers to the application name */
    /* 'Buckets' refers to the application name */
    val: "버킷스 라이선스",
    translated: "auto",
    h: "sym++hSpJ7LeHTQAaiYRAK41eYIw9pfMFO2EbYTHGxo=",
  },
  "Buckets has crashed.  Please restart after submitting a bug report.": {
    val: "Buckets가 충돌했습니다. 버그 보고를 제출한 후 다시 시작하세요.",
    translated: "auto",
    h: "jPwdFrODeZ3bxIdD+YJ9CFGjCQTqdwQNr9CdB4QTI6U=",
  },
  "Budget": {
    /* Label for budget file selector */
    val: "예산",
    translated: "auto",
    h: "zOO4DqNSFLa6Z9vlmfaz8OnwggHn8wJeP058V5mUKbE=",
  },
  "Budget Specific Settings": {
    /* Title for budget settings page */
    val: "예산 세부 설정",
    translated: "auto",
    h: "/RQVOKmoXTgeciF+ohehk19BxpvBXud+3HjfZPPw1v8=",
  },
  "Budget file": {
    val: "예산 파일",
    translated: "auto",
    h: "hbfzyLF9pCBuXZJ4fcHPQVNia5LnROzn4NZFhOhjuG8=",
  },
  "Budget files are too different to merge": {
    val: "예산 파일이 병합하기에 너무 다릅니다.",
    translated: "auto",
    h: "S/vIb5Nknf3NHyuW7Xmh5zS8soTt74dT2/tWCxM5lic=",
  },
  "Budget password:": {
    val: "예산 비밀번호:",
    translated: "auto",
    h: "yB5u4awiXu76+/Pw81ZYhBtgYQktcAVe6KU4WreiReU=",
  },
  "Budget-specific number format": {
    val: "예산별 숫자 형식",
    translated: "auto",
    h: "34SWA6JebUvD6EsRbt8oe1ERhdfOkpdEfhXNZsRVcx4=",
  },
  "Budgeted": {
    val: "예산된",
    translated: "auto",
    h: "aP72arzLN/j79zGtL8DWE7wcBGciRcWqMOR1aTHJmNo=",
  },
  "Cable TV": {
    val: "케이블 TV",
    translated: "auto",
    h: "wISz6Dh0vnQ1Tjhr9GWcJ2rhiif2af6NXsAzEAXYxfo=",
  },
  "Calculator": {
    val: "계산기",
    translated: "auto",
    h: "IiaAFlM5LkjsirGL06i1plXy1FoW75TKBiuin2r4s6Q=",
  },
  "Can't merge budgets of different versions": {
    val: "다른 버전의 예산을 병합할 수 없습니다",
    translated: "auto",
    h: "6+AzeGDN9PmeIUO0hjF85F3PzmbhX9bXkHzYVrGiNU4=",
  },
  "Cancel": {
    /* Button label */
    val: "취소",
    translated: "auto",
    h: "wHdMGFBg/BNmqwwBSIr4TrXk4fT1kilDHgZN5z4N5sU=",
  },
  "Cancel Import": {
    /* Undo/redo label for canceling import */
    val: "가져오기 취소",
    translated: "auto",
    h: "ASPyW8TypDFl1ANm1SIrpmykDdl3rBQDzC+wk4mdZXA=",
  },
  "Cancel Merge": {
    val: "병합 취소",
    translated: "auto",
    h: "xOUSd4pIBFhoe1VahnIJgCO8yf46iL9AGSBb3bE9Mvc=",
  },
  "Cancel merge": {
    val: "병합 취소",
    translated: "auto",
    h: "PtR83Mtr2bGbo1WTP4IRb/XgW5AiIVvzTQD9jFDSoAI=",
  },
  "Cancel sync": {
    val: "동기화 취소",
    translated: "auto",
    h: "8xFWyPShIifEhumOA/PeoTtccm5TTtbQmWFViIGcPQA=",
  },
  "Car Insurance": {
    val: "자동차 보험",
    translated: "auto",
    h: "x3xbGNEH/vHcpYAm2HXTUhRRuz2sb6yfH0gBYFFkqc4=",
  },
  "Car Maintenance": {
    val: "자동차 정비",
    translated: "auto",
    h: "Lsok3+kX1L7SXMumFWNo+oxBgfmGJcWg1CdSDw6byx8=",
  },
  "Car Payment": {
    val: "자동차 결제",
    translated: "auto",
    h: "wp49ZoinRgifzKQ+N9RrJ6LG/9Yw6hkw1RCwXwHc6tA=",
  },
  "Categories": {
    val: "카테고리",
    translated: "auto",
    h: "UxClJeKz605AO/90mJ2YOi6N2LJk9D+RJReMlC3TDO8=",
  },
  "Categorization": {
    val: "분류",
    translated: "auto",
    h: "DShuYOF3daz37AE7lGCN1TajYU1VyorRCvLwh4bM1r8=",
  },
  "Categorize": {
    val: "분류하다",
    translated: "auto",
    h: "mA6/TefxgXpo2M+OUx/ATLQ4QYHv4t1+8vy3MmV+EQg=",
  },
  "Category": {
    val: "카테고리",
    translated: "auto",
    h: "/frArhrZL+bxdiiBKi/1cYdR/tSD7rhbMHJLgHQQdNQ=",
  },
  "Change": {
    /* Noun: name of object describing a change in data */
    val: "변경",
    translated: "auto",
    h: "prG6DzYDTLinvWF30h7VL2QRdBBwll00hx4flJyEWMc=",
  },
  "Change Account Type": {
    val: "계정 유형 변경",
    translated: "auto",
    h: "elw7uWDm9Vij1azrwiBbY+VwbjMQuo/xziG393BqGUA=",
  },
  "Charity": {
    val: "자선",
    translated: "auto",
    h: "5OqY1JRI3brWCHQyu9VDY9hpjXzg1cVB1oQnXLQjZ4U=",
  },
  "Chat with Matt": {
    /* If "Chat with Matt" is too wide, you can translate this as just "Chat" */
    val: "Matt와 채팅",
    translated: "auto",
    h: "9nQjbkjkf8l2mX6xeNaU///NYhxxWFqnvTKOmakMmRY=",
  },
  "Chat...": {
    val: "채팅...",
    translated: "auto",
    h: "SytGirG0+cdtbPfjBma/G/tEOt4rdOj4mnjcaWsTbt8=",
  },
  "Check For Updates...": {
    val: "업데이트 확인...",
    translated: "auto",
    h: "S/1p0syaOMqjAbHpmZa6gWaIh/9e29QR2cRJhiMadz0=",
  },
  "Check for Updates": {
    val: "업데이트 확인",
    translated: "auto",
    h: "6vtxqhyfiDaIXgTBH0pdoPzTGftDDEoRFNGU082PhRk=",
  },
  "Check for updates": {
    /* Label on button that causes budgets to sync between devices */
    val: "업데이트 확인",
    translated: "auto",
    h: "MerO0fg7nnpQBvZ87GDbTKrOJZo+aGSx6qiQEeVAmXw=",
  },
  "Checking for updates...": {
    val: "업데이트를 확인 중...",
    translated: "auto",
    h: "wjjhyYhYEFdJWUmwdJIEdxm0iAq2bwrWU79ANObzzZY=",
  },
  "Choose": {
    val: "선택",
    translated: "auto",
    h: "UeJgTiqvSbyjLXgzersyKp/deJ/06L+xXts8Eq4g6Jk=",
  },
  "Choose a file ending in either .ynab4 or .ymeta": {
    val: "파일을 선택하세요: .ynab4 또는 .ymeta로 끝나는 파일",
    translated: "auto",
    h: "Tym1GWz52+2AgA4qwsbqknBtvR9QYYGN2y5oYYQ7yZQ=",
  },
  "Choose save location": {
    val: "저장 위치 선택",
    translated: "auto",
    h: "3GFv8eEkA96n0cetdd4cUVIl0CtfTQCk4q9Z09uSE0Y=",
  },
  "Choose which of the files on this device you want to make available to your other devices.": {
    val: "이 기기의 파일 중에서 다른 기기에서 사용할 수 있게 하려는 파일을 선택하세요.",
    translated: "auto",
    h: "3Vyn9u6I123YU1+p+9TdGJ3wnrJHbwswJEZPYB1lrYU=",
  },
  "Choose...": {
    /* Label for choosing backup folder */
    /* Label for choosing a budget file */
    /* Label for choosing a backup file */
    val: "선택...",
    translated: "auto",
    h: "mitI0a0UwvINcTM1Hb0R9fSY5KucYuyfjuNiySSQmDY=",
  },
  "Cleared": {
    /* Tooltip text indicating that a transaction has cleared. */
    val: "Cleared",
    translated: "auto",
    h: "j1SmbPuDDBP04XfOH9NNFCDzXmB9xAzSoVG7RcHcdBg=",
  },
  "Cleared balance": {
    /* Label for balance minus uncleared transactions */
    val: "Cleared balance",
    translated: "auto",
    h: "3SpY0eBe4gJ1WtupFnV904/a1Xlfx5Y4ybAdHQGzGV0=",
  },
  "Close Account": {
    val: "계정 닫기",
    translated: "auto",
    h: "qTJEf8mdhLx1bU9LZPYaTtrT8pMLqxemoL/YqbhjESI=",
  },
  "Close Window": {
    val: "창 닫기",
    translated: "auto",
    h: "hrPxvP/hrVgtNNTMX4sv5sljx57neTy+2p0U1TKGuCE=",
  },
  "Close account": {
    val: "계정 닫기",
    translated: "auto",
    h: "7HdV8X8++teDNW33urE2eccDw3VLdSpvII89zC/sfu4=",
  },
  "Closed": {
    /* ! Label for list of closed accounts */
    val: "폐쇄",
    translated: "auto",
    h: "8pZrnvzAUQTJhDN/XX31DLvx0wIs1Ww3fV6pktEKEHs=",
  },
  "Clothing": {
    val: "의류",
    translated: "auto",
    h: "as4CQmPu3VF2LxSvA5djgiAPatdFRqwmOt0NiHJCe7E=",
  },
  "Confirm password:": {
    val: "비밀번호 확인:",
    translated: "auto",
    h: "Px/rLFgkE/Sv1Z+Xm0frULVV3lxvrEc7ABJaDzmv670=",
  },
  "Conflicts": {
    val: "갈등",
    translated: "auto",
    h: "W04VkIj+XKS1rPtY7a6cQITUa157onpN6NAVlO9MknY=",
  },
  "Connect": {
    val: "연결",
    translated: "auto",
    h: "pCLQy6ZAsZnJ3ff5r+iD+O2vHQhIJEEUHUhiY1NrMP0=",
  },
  "Connect to bank": {
    val: "은행에 연결",
    translated: "auto",
    h: "0T7eA3oFvMxyPIOAkMZ2rDpJxQVORgxrLqrDx87L1ZY=",
  },
  "Connected": {
    val: "연결됨",
    translated: "auto",
    h: "fV/VOfsqBR+vyqF2tRjG6qsC8ufS/QDaTRaUee+UEMA=",
  },
  "Connecting...": {
    val: "연결 중...",
    translated: "auto",
    h: "fYdj0RfOQMPN3n28gswFnK4aOvozPH0hqm9oqd+NcWI=",
  },
  "Connection corrupted. Please delete and re-create.": {
    /* Error when an invalid SimpleFIN connection is attempted */
    val: "연결이 손상되었습니다. 삭제하고 다시 생성해 주세요.",
    translated: "auto",
    h: "YjH9IxACkJ2e9cq+MYI3I6l3RmOWZPEBAwzjq3W7x0s=",
  },
  "Connection deleted": {
    val: "연결이 삭제되었습니다",
    translated: "auto",
    h: "QbB3NfDIpEmXgwY+hq95+aQCRlMErfUvqa+o3tPY93A=",
  },
  "Connection saved!": {
    val: "연결이 저장되었습니다!",
    translated: "auto",
    h: "wAgyeIQsbaI/kFPgBf8sWlKK1mf/VcP7BjHpC9TNYuc=",
  },
  "Copy": {
    val: "복사",
    translated: "auto",
    h: "T2DR4UKv+pyVWY8GzF/WWjk5XqMXgZ0gDyXkZmYczHw=",
  },
  "Count": {
    val: "카운트",
    translated: "auto",
    h: "ikvrmlftwm5qPEEca6YD6duk6CH45CROgmp9sfZMEFE=",
  },
  "Create Account": {
    /* Undo/redo label for creating an account */
    /* Undo/redo label for creating an account */
    val: "계정 생성",
    translated: "auto",
    h: "0N2I0sNdMLVk7zC9FqlNYoA1G6RDgQDvQErp/TjAnRA=",
  },
  "Create Backup": {
    val: "백업 생성",
    translated: "auto",
    h: "tUZEq5sa8Ggh6lIgsWzX8Blj6/unJ8dhl9sKpfwxRYY=",
  },
  "Create Backup and Start Over": {
    val: "백업 생성 및 다시 시작",
    translated: "auto",
    h: "55tb3CtVKNADQpK4SdoMMPQvHu1ftBosd/dP8lFHV/o=",
  },
  "Create Macro": {
    val: "매크로 생성",
    translated: "auto",
    h: "F6PDykaoACWoqQ+oKUyJyhERAe1FjT6A3OkxL+S5l8k=",
  },
  "Create Template": {
    val: "템플릿 생성",
    translated: "auto",
    h: "gAbtUL3vhxk+yCSp7fzAF4Z9tV0I4x7Uq5xDJ4nm2Uk=",
  },
  "Create Transaction": {
    val: "거래 생성",
    translated: "auto",
    h: "G5NDAP857MBDE66GWUREcFAJc2pCogndYa6y+m6PRfE=",
  },
  "Create budget password:": {
    val: "예산 비밀번호 생성:",
    translated: "auto",
    h: "Bf9XVrpN9UpVSKpZNRpBUw/IaFjMkNCmH4gpAfhYFkY=",
  },
  "Create macro": {
    val: "매크로 만들기",
    translated: "auto",
    h: "9xZZAswDH8zePPUhfsaSEDJ21GU1yhILKhDWtvnUlr0=",
  },
  "Create new account": {
    val: "새 계정 만들기",
    translated: "auto",
    h: "SmoVFbeAWSO4cW1YQJbuDJQz8kenVz5++WTJEkS6Vos=",
  },
  "Create or manage account": {
    /* Link to manage relay accounts */
    val: "계정 생성 또는 관리",
    translated: "auto",
    h: "U5lOs+hLfJ8gBJoXR9ToFOsg130hRzN7A4AauACQHHY=",
  },
  "Currency symbols": {
    /* Label for currency symbol setting */
    val: "통화 기호",
    translated: "auto",
    h: "MB7GDp8dkw8tLgwCzsb2VwrDRWwirbks5+U6PkshBB4=",
  },
  "Current version": {
    /* Label for current application version */
    val: "현재 버전",
    translated: "auto",
    h: "lVqFstk3jMWPnA1laudxoN7T6PXUVe365RE2LqCMZmA=",
  },
  "Custom": {
    /* A label for choosing a custom date range */
    val: "사용자 정의",
    translated: "auto",
    h: "npcV1SQQyG8XsJlGwbsserjaxIIkVCtt9ZFBODiihSI=",
  },
  "Cut": {
    val: "잘라내기",
    translated: "auto",
    h: "+kuX06pgC809fwr+5h9VbC8sVgVWo6EXgg6bzfXXtJs=",
  },
  "Dark": {
    /* Option for theme preference */
    val: "다크",
    translated: "auto",
    h: "n09JYTXgkVzgVfXO+ZBo3gryCtlg9t+GoZSQe2YpJPQ=",
  },
  "Data": {
    val: "데이터",
    translated: "auto",
    h: "nb/gDaJJpEyxUczsooYPcWRNvDVzBJLOxevxBEAPM+o=",
  },
  "Date Posted": {
    val: "게시 날짜",
    translated: "auto",
    h: "3A+vhaBB21UASdnwmNYVGMV9qH/U43D3DCsVSXlWasY=",
  },
  "Date format": {
    /* Label for application date format preference */
    val: "날짜 형식",
    translated: "auto",
    h: "fY1FnR2YTcyORx9p/4BdLTjtjH1FNW35jtGy64ltO4E=",
  },
  "Date range": {
    val: "날짜 범위",
    translated: "auto",
    h: "Byx38NxnaOdzvBIgWlDoyRZR5IEPJ329lwDnivHzJik=",
  },
  "Debt": {
    /* Label for a total debt amount */
    /* Name of bucket group for debts */
    val: "부채",
    translated: "auto",
    h: "y9kslXhW17gMMFZ9Dq8g/tabfINzlmzT+39QNbWiWGA=",
  },
  "Debugger": {
    val: "디버거",
    translated: "auto",
    h: "4ScsdyOtUZsKH/cENJNnmyZFMuIjtHzPrPhrpnc+kOk=",
  },
  "Debugging": {
    val: "디버깅",
    translated: "auto",
    h: "5qYhotBwdyjpp1WiJlT+T5wf/rpbKu5NEGOrxJMpz2U=",
  },
  "Decimal delimiter": {
    val: "소수점 구분자",
    translated: "auto",
    h: "Qjuny9lynn/v2WJwTnYLdXQb/ne+0Q2TBiSM+KFIrIU=",
  },
  "Default": {
    /* Label for default backup folder location */
    val: "기본",
    translated: "auto",
    h: "TKDg5zIpVAzBCbQHtW0yWzTe9w8z+EmC7VPeZA2B70k=",
  },
  "Default number format": {
    /* Label for application number formatting preference */
    val: "기본 숫자 형식",
    translated: "auto",
    h: "mgzNoP6jlMs5CPedg7OHyJuqrwEkQlj6DduekmeqfCY=",
  },
  "Delete": {
    val: "삭제",
    translated: "auto",
    h: "sm3jcrSw6qxgICiEpy25imvm6QNueF6oZ+oBxfeSEJg=",
  },
  "Delete Account": {
    val: "계정 삭제",
    translated: "auto",
    h: "zTJTocYLEbNVwJ0ojyPCB6M0JpGx6fe6AZHWtuVJv0M=",
  },
  "Delete Connection": {
    val: "연결 삭제",
    translated: "auto",
    h: "o6bxlUpjZFFTleiRLA4ykeB3yEHsAiXW9usUdJ9jh1g=",
  },
  "Delete Group": {
    val: "그룹 삭제",
    translated: "auto",
    h: "VaefOk8g8N64N+Td8TEorhhMQBe0AuWmfRz7u7+Q1Ko=",
  },
  "Delete Macro": {
    val: "매크로 삭제",
    translated: "auto",
    h: "Qb7shd6fRLybaDzPvdr0Z4VfVek/fHVV556kEcNZrH8=",
  },
  "Delete Transactions": {
    val: "거래 삭제",
    translated: "auto",
    h: "5rAWRNk97CWy9OfDP5IWSE/T2Ao461w7C3z/IDV154I=",
  },
  "Delete Unknown Account": {
    val: "알 수 없는 계정 삭제",
    translated: "auto",
    h: "SzZ+N6/hpntSyAoyuLxzaipQcinkrh5c33ceQdtoUcE=",
  },
  "Delete all": {
    val: "모두 삭제",
    translated: "auto",
    h: "nKzti1takFUxZyWfLTGqgvdL3dJMx6CdNwVfBH1jUYE=",
  },
  "Deleted": {
    val: "삭제",
    translated: "auto",
    h: "qaM7+YriKFk63EE2I46KNlMjYgR2jOP4JZMTj4yIti4=",
  },
  "Delimiter": {
    val: "구분자",
    translated: "auto",
    h: "VDesNaCayRIGFHLEXOjH3Eev3D/EzM6/dVsl7zN/+Mo=",
  },
  "Description": {
    val: "설명",
    translated: "auto",
    h: "bg0ZDIR+z+PEkinc/ZyqkERMsVZcFFm3NhQoIqZH+WM=",
  },
  "Details": {
    /* Label for sharing avenue details */
    val: "상세",
    translated: "auto",
    h: "68e/QPEuI36iIEcTWmKDrVU9KBReQ3EjFzF1F06KQMA=",
  },
  "Device": {
    val: "장치",
    translated: "auto",
    h: "SljXcmF5cBUDvagtLmL5aNIz++tnIbf5qjS1cxxEI1I=",
  },
  "Device ID": {
    val: "장치 ID",
    translated: "auto",
    h: "23vizNM3wG6SeZvqULHYvtlqlWmwbFL3GuLOzGzdSK8=",
  },
  "Diapers": {
    val: "기저귀",
    translated: "auto",
    h: "Vr53xwIeHjIIuMymcxrQ3l1RsDE6ra+ZTFT4dbR/rlI=",
  },
  "Disable Macro": {
    val: "매크로 비활성화",
    translated: "auto",
    h: "k0HEkS8+oirJJHylM2fcT1D1/IqnGFVX3cGlU3d3G50=",
  },
  "Disconnected": {
    val: "연결 해제됨",
    translated: "auto",
    h: "8d3FMs2ZCPYbCLDzsVcqXsv6b5vDilOwJCEAevNsZDM=",
  },
  "Do both devices show the same pairing codes?": {
    val: "두 기기가 같은 페어링 코드를 보여주나요?",
    translated: "auto",
    h: "w66hJr+u8QSrtvG+XC0n5CLXFsJuU1YfxxNPzX6b/z8=",
  },
  "Done": {
    val: "완료",
    translated: "auto",
    h: "FlUsJYC76LgtNYLenrPiDvDgAVk3wLT14rwyk2hHYiY=",
  },
  "Download Update": {
    val: "업데이트 다운로드",
    translated: "auto",
    h: "OvekDBh71chOkbTXqPs/V/x0lNbpc668s4hyXRF5G+I=",
  },
  "Downloading update...": {
    val: "업데이트 다운로드...",
    translated: "auto",
    h: "vTHXpZeFxjQhKPwUQPCm+eHcyYR6YjSmIm4mtV/5iTE=",
  },
  "Duplicate Window": {
    val: "창 복제",
    translated: "auto",
    h: "tjwFTBARBKQ5uC9Fh0zm7ag/RViV95pptJBJn9eVqHE=",
  },
  "Duplicate of existing transaction": {
    /* Label for an imported transaction that is a duplicate of an existing one */
    val: "기존 거래의 복제",
    translated: "auto",
    h: "6d7BweiCObuFrgVXiVOkjVaHEKwbPSJY2AbNcT/7508=",
  },
  "EULA accepted": {
    val: "EULA 수락",
    translated: "auto",
    h: "MZZW8mGJoOJ5ehMdPPve2szfe+yi7Du06hSKo61py9Y=",
  },
  "EULA not accepted": {
    val: "EULA가 수락되지 않았습니다",
    translated: "auto",
    h: "FVsbix5CHwscF/kgCdBTZYPnKTpIN55xFHleEFK6Oqw=",
  },
  "EXPERIMENTAL Buckets Macro Maker": {
    /* 'Buckets' refers to the application name */
    val: "실험적 Buckets 매크로 제작기",
    translated: "auto",
    h: "NZPVXQ+Dw1vv0fLXY+Z4R1KiEkXjDZtSmY3tVz5L1VI=",
  },
  "Eating out": {
    val: "외식",
    translated: "auto",
    h: "aiQggrM+Wb8WtkoJykeSDnNiCBgzGqVGc1Hvkf5Uzg8=",
  },
  "Edit": {
    val: "편집",
    translated: "auto",
    h: "9+ZynTDPePvsJX4rW8Mn0wEzk0GRQ+udON01NKHVsQU=",
  },
  "Electricity": {
    val: "전기",
    translated: "auto",
    h: "D85G++Fy1hUUGZfHiKAUcNRlXmLcdkKK7RtxnwJ110U=",
  },
  "Enable Macro": {
    val: "매크로 활성화",
    translated: "auto",
    h: "9SWFr96CNVD21JQ30lw4cj1JCAZ44RNlKkDzQJ/RyuE=",
  },
  "Enabled": {
    val: "활성화됨",
    translated: "auto",
    h: "hHztbKAreElTc7ttNUovJFG0DIq9xfILBM+1aNV8x2Q=",
  },
  "Encryption": {
    val: "암호화",
    translated: "auto",
    h: "Rfsn7WkrTLeDLzups4h7merVzPfg8xcRh1++z49WW8Y=",
  },
  "Encryption keys": {
    val: "암호화 키",
    translated: "auto",
    h: "u45A8tEUHjVJ/FuiM5W+sNzNth8QZuHXNgdL16YmB1U=",
  },
  "Ending Balance": {
    val: "종료 잔액",
    translated: "auto",
    h: "bwan2qqqdDloluCkgp+UPYWSAeOQk9zkaNwb2p0kUDk=",
  },
  "Ending amount:": {
    val: "최종 금액:",
    translated: "auto",
    h: "0IUvXk9nogxjdL1n0VZPrxcMOUZODNXMlGrlpyXq8bI=",
  },
  "Ending balance": {
    val: "최종 잔액",
    translated: "auto",
    h: "aAtJw4Tz1ZrB97s3K84TZqaiG7f+B04ZFnxZx9ryHWQ=",
  },
  "Enter License...": {
    val: "라이선스 입력...",
    translated: "auto",
    h: "A+/eZ8qTAh97iBouJPInRkCg7F0nOkteYEBO7+lFHHA=",
  },
  "Error": {
    val: "에러",
    translated: "auto",
    h: "/ErBlknw7o83xx0uIDCjdDA4u5bAwnNZuhFd2GV1Zcw=",
  },
  "Error decrypting recording": {
    val: "녹음 복호화 오류",
    translated: "auto",
    h: "6LehLh8oNPMtzfLjQbZAJ3a35TSBoIn+XTBtBBaEuKI=",
  },
  "Error during import": {
    val: "가져오기 중 오류",
    translated: "auto",
    h: "BiI3zjvgdX5vXe4kX0mS7AvEFln+iIdMmLNX1xeQqLU=",
  },
  "Error during merge": {
    val: "병합 중 오류",
    translated: "auto",
    h: "PoE7TMsxGW9dp4u1juziybXV1VV8Wgv9ejdrAoUVynk=",
  },
  "Error fetching data": {
    val: "데이터를 가져오는 중 오류",
    translated: "auto",
    h: "z94B0956dECmmaMVLZFW0oZMVtA92etw+2ZqumR4K9Q=",
  },
  "Error importing": {
    val: "가져오기 오류",
    translated: "auto",
    h: "rekzwWcY0HRZEhFebX1fJrp4aDJ/NTPxIwWaCYAk+7k=",
  },
  "Error parsing response": {
    val: "응답 파싱 오류",
    translated: "auto",
    h: "PsIRbom+m8Y5OIEPW2rzJYVlNA2NQrZmEQnpW7Y/9KI=",
  },
  "Error restoring from backup": {
    val: "백업 복원 오류",
    translated: "auto",
    h: "7dtoozbhFD0JBqVUuvIbB6I58faFMyoolWjHqHP7ypo=",
  },
  "Error running macro": {
    val: "매크로 실행 오류",
    translated: "auto",
    h: "obu/8VMe/z+StejTUbzL5fGOP7tMkWw4DfW4KkF/lxs=",
  },
  "Error running recording": {
    val: "녹음 실행 중 오류",
    translated: "auto",
    h: "eE9Fw8G4vQpND3fFWnfGNvtN5LxCcQQecWO6fQgBmpM=",
  },
  "Error running sync": {
    val: "동기화 실행 중 오류",
    translated: "auto",
    h: "LB/WNzHp4orPsbCVEJuDzUPsQUfNRDNXw7sFnbzfguw=",
  },
  "Error updating transaction": {
    val: "거래 업데이트 오류",
    translated: "auto",
    h: "IEJfuOO0LRCEv2OUh8Cz02PtiJ8tqVTRzeXK5DyqBQs=",
  },
  "Existing version": {
    val: "기존 버전",
    translated: "auto",
    h: "w3Sl4FH2y8PxQEXEcDumPPkMrRbBM/winnkwLKNDghY=",
  },
  "Expenses": {
    val: "지출",
    translated: "auto",
    h: "d6aKytFAPwPUzFOv41R0itfcMu11VdE29vkM05dnpBU=",
  },
  "Export": {
    val: "수출",
    translated: "auto",
    h: "mZJs0iE089tMZ5BWqTUBp+2aJ90wKL4act4hUPt7zkA=",
  },
  "Failed": {
    val: "실패",
    translated: "auto",
    h: "pDZMH/BpUzRALpC+FEhtjeyLcyvg3szLxg2ly14c9pY=",
  },
  "Faint cents": {
    /* Label for application preference enabling/disabling faint cents */
    val: "희미한 센트",
    translated: "auto",
    h: "gL5W+6nmqNfRsbiNIBEyHIX0LvI1xCYl+kDyuUwFsGI=",
  },
  "File": {
    /* Noun; label for budget filename */
    val: "파일",
    translated: "auto",
    h: "9XpUff7TtVQbIncvgmrfzVB2gkBh35RnM1ET/HFr3k0=",
  },
  "File access error": {
    val: "파일 접근 오류",
    translated: "auto",
    h: "DnlPFIjZcB6Sgt6APxZIl4HyFKIDaY5CiE4AWlVYqMI=",
  },
  "File does not exist:": {
    val: "파일이 존재하지 않습니다:",
    translated: "auto",
    h: "RPeWW9lCHkg+d6XybADj3OH2jxrYcSOhrA3+QHEcYz0=",
  },
  "File import mapping": {
    /* Noun: object that contains settings for importing a file */
    val: "파일 임포트 매핑",
    translated: "auto",
    h: "5s+unX9P0STLcQ5yQjcOEEO3XLrHp6TiOAXOY5L4Jzo=",
  },
  "File saved: ": {
    val: "파일 저장됨: ",
    translated: "auto",
    h: "e6UDV8UzF5qqysQpN3OrcspjD8zPNn72zKd1CH1lFe8=",
  },
  "Files available to sync": {
    val: "동기화할 수 있는 파일",
    translated: "auto",
    h: "tD4YLtMv/MtHbTXTSZmkcCxj1g7Km6d6kuWI+1yHo/8=",
  },
  "Filter": {
    val: "필터",
    translated: "auto",
    h: "gG/X0Prd382E2jAAsfyk3bynhjgo9Fk44NYmIbqfMTk=",
  },
  "Find Next": {
    /* Edit menu label for finding the next match.  Perhaps use what your browser or other applications use. */
    val: "다음",
    translated: "auto",
    h: "LALfI5V4TsQo0DcGJwmNmrm3xNPtY5PmQuxB1voZo34=",
  },
  "Find Previous": {
    /* Edit menu label for finding the previous match.  Perhaps use what your browser or other applications use. */
    val: "이전 찾기",
    translated: "auto",
    h: "0n6Dq5KDTxxsTAKrJE+RDdgi9ln6FyfUEPNBJ6ejZ5o=",
  },
  "Find on page": {
    val: "페이지에서 찾기",
    translated: "auto",
    h: "C8FK0TP/vHA4Dt565Z2E2vc+j9soU5SIaWGmc7j+UEc=",
  },
  "Find...": {
    val: "찾기...",
    translated: "auto",
    h: "aUU1pzvlZzKNgYZP2ZpPtQMImBOStbFnK33P3YwXTNs=",
  },
  "Finish merge": {
    val: "병합 완료",
    translated: "auto",
    h: "B0c10bq0bG9fZmohGvSo0pG1yeqxKs5mLo7SpplAhfw=",
  },
  "Folder": {
    val: "폴더",
    translated: "auto",
    h: "U0LnwvQV2yrtaYfkte120FAJhkqVya8TcV7qJ9tumUs=",
  },
  "For Older Budgets": {
    /* Label for section related to updating from older budgets */
    val: "For Older Budgets",
    translated: "auto",
    h: "TMGosuE5olJuLuly8uc8gx4r4RTMA3guKrboArLuB7w=",
  },
  "Forbidden": {
    val: "금지",
    translated: "auto",
    h: "CcNf+bPZqU5SYvmmxeJh8TRTDY9bbSASjE9y1+21kGU=",
  },
  "Force Reload": {
    val: "강제 새로고침",
    translated: "auto",
    h: "ktBJY2UXO+2r0ZvmbQXhArN51bSTnyaNnnBNR9PQ5K8=",
  },
  "From": {
    val: "부터",
    translated: "auto",
    h: "cCFAY2/zl3pq5fMwrP/2LBsrrL36SYzS+6in7mvWyvY=",
  },
  "Fuel": {
    val: "연료",
    translated: "auto",
    h: "lU9dO2a3oisfgHqd0n39sKC/wl7ymSV/XprtLhQLEiI=",
  },
  "Full version": {
    /* Status for when a user has a Buckets application license */
    val: "전체 버전",
    translated: "auto",
    h: "8gxVtYQtIFlJyU0m/Fyu2usHpVC5gXv1gstLNS4/pV4=",
  },
  "Gain/Loss": {
    val: "이익/손실",
    translated: "auto",
    h: "Kop7hNPijjGN5jXxpDmcP32CJy22tzVz1qXWTjNxVg0=",
  },
  "General": {
    /* Label for general preferences */
    val: "일반",
    translated: "auto",
    h: "Ro1hqU2fnZPlbffPiUFBRSO2oSn7YKpDUbDUDIWP9Ew=",
  },
  "Getting Started...": {
    val: "시작하기...",
    translated: "auto",
    h: "XD8GQYEIDrNjTMPX4TjGeAbbCIEBcAONlYPd/D8Hz84=",
  },
  "Go To...": {
    /* Submenu title for navigation shortcuts */
    val: "이동...",
    translated: "auto",
    h: "AsKW6buNlZ7YlWHN1pVgNlCAzqiFIsJGL1cg8CkVGkg=",
  },
  "Goal completion:": {
    val: "목표 완료:",
    translated: "auto",
    h: "v+G5gj6B+MtHwQovNmj/BWbpnQncARZGo+swhE1fbtg=",
  },
  "Goal:": {
    val: "목표:",
    translated: "auto",
    h: "77+E2dn/Mw53xjGhNc6irsiq1WULAiC4yIyt4NaO0DM=",
  },
  "Goal: 0": {
    val: "목표: 0",
    translated: "auto",
    h: "rtvJnJFYA7lHYjPjGpF27/h2So3pRdrRLjfnkg78woQ=",
  },
  "Groceries": {
    val: "식료품",
    translated: "auto",
    h: "T6Kz6/FDxQkeIUJq8SVGn0T7OPdZ7B0YjPD3qHqW5p4=",
  },
  "Guide": {
    /* Menu label for the Buckets user guide */
    val: "가이드",
    translated: "auto",
    h: "E0TqJgLjqp65xs2CJV72FGZk5q/R8lIwaWCMnXpvTPE=",
  },
  "Health Insurance": {
    val: "건강 보험",
    translated: "auto",
    h: "nsWIG2Kbb9OtoQkBvgkFh5MfMVNfbuGKhZypQ3uoQJw=",
  },
  "Hello!  Thanks for trying out Buckets.": {
    val: "안녕하세요!  Buckets를 사용해 주셔서 감사합니다.",
    translated: "auto",
    h: "0m9VvMGwLCqD3lmZ24GbzlkRxPX1kf/DsbWA9kkBWX0=",
  },
  "Help": {
    val: "도움",
    translated: "auto",
    h: "TvUUB7AuCuFJ9IWiz2SbsjnUvYoDPZAaMPxup/rwosM=",
  },
  "Hide Buckets": {
    /* 'Buckets' refers to the application name. */
    val: "Buckets 숨기기",
    translated: "auto",
    h: "38YdGXFjndmgDFgXTpfUZ0F+W/D9e267YaAvzYZm4O8=",
  },
  "Hide Others": {
    val: "기타 숨기기",
    translated: "auto",
    h: "RpKz0G7Y8OE5oyGm0/zRffPdr7RQkneZCYrikLHIZ+U=",
  },
  "Hide debug info": {
    val: "디버그 정보 숨기기",
    translated: "auto",
    h: "9rip1vzCF79F3bOZh86TdPkeaNjawcFqlYX/gmCqHyU=",
  },
  "Holidays": {
    val: "휴일",
    translated: "auto",
    h: "HTQ10E8CaKVUu71N6uLx9J+Y6naLLRX37v0oQkesV3k=",
  },
  "Host": {
    val: "호스트",
    translated: "auto",
    h: "gPYRfd5+U6aDaCpXeR+YM/R+wrkLCLMOQUbeT5GQn6E=",
  },
  "Household goods": {
    val: "가정 용품",
    translated: "auto",
    h: "UK1mJCSwg2XnGpH47pKFFD8NlrCfcd3bQb1bJt2RXEg=",
  },
  "ID": {
    val: "아이디",
    translated: "auto",
    h: "ge86Jcy26vcv5uPFI29MfLOxHh8ctACck6nRdrl9aM4=",
  },
  "If Net is 0, the bucket transactions will be marked as transfers rather than as income or expenses.": {
    val: "Net이 0인 경우, 버킷 거래는 수입이나 지출이 아닌 이체로 표시됩니다.",
    translated: "auto",
    h: "/btREV6/jPJtrc1ERDwLUyJAowC8+v6gUB7bmJJYzT4=",
  },
  "Ignore": {
    /* Label for checkbox controlling whether an account is ignored or not */
    val: "Ignore",
    translated: "auto",
    h: "K8sAh2XND1/tJOuX9xTLmr1fQjUOB70cfc9GwI62fEs=",
  },
  "Ignore Account": {
    /* Undo/Redo label for ignoring an account from import */
    val: "계정 무시",
    translated: "auto",
    h: "Ils1ViOchbpiaHmdalbFiGmOlTK7ck+6+BhoyvUVrqM=",
  },
  "Import": {
    val: "가져오기",
    translated: "auto",
    h: "F3sijvfYz3oB4iz2rVHjUvNDLQs43MbXDVIr5VFA2/c=",
  },
  "Import .zip file": {
    val: "ZIP 파일 가져오기",
    translated: "auto",
    h: "EmJa8O6YE7jrgmaqDUM5pIdurIYHfx1RIvVLHmqhRws=",
  },
  "Import From Web YNAB...": {
    val: "웹 YNAB에서 가져오기...",
    translated: "auto",
    h: "7Yteq/akhgWWCBUeqgBRz4wP6bKcirfp74uLeTQop3Q=",
  },
  "Import From YNAB4...": {
    val: "YNAB4에서 가져오기...",
    translated: "auto",
    h: "z10Vp9BzEC6CkLTNtR8xywSTNYGMBbGFZMD7XUEbrVs=",
  },
  "Import Transactions": {
    /* Undo/redo label for importing transactions */
    val: "거래 가져오기",
    translated: "auto",
    h: "0RkMBEPqgu5UHcGd2OzH7z/1vkRlIhOPxBSeollnMnU=",
  },
  "Import Transactions...": {
    val: "거래 가져오기...",
    translated: "auto",
    h: "PPLzf/61MKc3iWfDMTRo6ERH/TYu6TxBH2vmVbZD5Lk=",
  },
  "Import complete!": {
    /* Notification when an import is complete */
    val: "가져오기 완료!",
    translated: "auto",
    h: "L9VgrAXBV8q2Ux9I1Y2Mr/vbc6PiBI0Uxct20Hw6hwY=",
  },
  "Import file": {
    /* Button label for starting a file import */
    /* Button label for starting a file import */
    val: "파일 가져오기",
    translated: "auto",
    h: "iaQvPnsbTKu/ItmjoC8ctwpVbyumVe15GLL8nCbe25Q=",
  },
  "Import from Web YNAB": {
    val: "Web YNAB에서 가져오기",
    translated: "auto",
    h: "NyXkbdCVf1mZfbmhjqJx4M10Vz/UfGdvSHdz+G6CGKc=",
  },
  "Import from YNAB4": {
    val: "YNAB4에서 가져오기",
    translated: "auto",
    h: "FJ55mGfxitbc5YeY1s6YEji8I54ILSi3sfzQALSx50I=",
  },
  "Import links broken": {
    /* Notification indicating that the links between imported transaction files and a particular account have been broken. */
    val: "가져온 링크가 끊어졌습니다",
    translated: "auto",
    h: "rLgGF32tMx7KSWu+vRLEbr+IbkedxhS8ELcYZhNCqTs=",
  },
  "In": {
    val: "안에",
    translated: "auto",
    h: "TcCPpYF7/U7vM5pPmpqvJipZt0WPk3A/vC7Ec8pfDvo=",
  },
  "In/Out": {
    val: "입력/출력",
    translated: "auto",
    h: "G/e+QHikQOjTM9bcDBrmUZj6ONRstDFt17sNXu9zUd8=",
  },
  "Include log file": {
    val: "로그 파일 포함",
    translated: "auto",
    h: "rjy01ggb0uSRPn/tmrf/BVwGQiXaaSc6Nh+o92BIU3U=",
  },
  "Income": {
    val: "소득",
    translated: "auto",
    h: "D2fJbta5d1Z5QYuRC5zzkBHsItZOOgY4FKrFJ64BvRs=",
  },
  "Income/Expense": {
    val: "수입/지출",
    translated: "auto",
    h: "i/Z19mssKMh8vj11iAIlpS59JGc7MtE5zkyAW/IJVdA=",
  },
  "Incoming budget file": {
    val: "들어오는 예산 파일",
    translated: "auto",
    h: "KQwRx6114V/RFL9ilT4S8R+fWFeCu7sLcYe2GcL9JmQ=",
  },
  "Incoming version": {
    val: "수신 버전",
    translated: "auto",
    h: "u02gUA6+LNLSmH1C76FF2HqPX3K7EuK8xBSB0tl41js=",
  },
  "Install and Relaunch Buckets": {
    val: "Buckets를 설치하고 재시작하세요",
    translated: "auto",
    h: "bzusTDIT831mqEwmmM59eT12mfoNMYiGPbUfoIzaCwo=",
  },
  "Internet": {
    val: "인터넷",
    translated: "auto",
    h: "LUwTAW8PsV34HKGrTUopI7v3NFK8iWKpv5Nb8EOtU1E=",
  },
  "Invalid categorization.  Categories not set.": {
    val: "잘못된 분류입니다. 카테고리가 설정되지 않았습니다.",
    translated: "auto",
    h: "DykWhCxgeqeIt2i+Lc2sRdURMNIgRgohpjs83umwH9Y=",
  },
  "Invalid date": {
    val: "잘못된 날짜",
    translated: "auto",
    h: "wDN2ZzrVLU22Lij4eJJvxPBmC6Qv9SPmgRT36Qpq9KE=",
  },
  "Invalid license": {
    val: "유효하지 않은 라이선스",
    translated: "auto",
    h: "BfJdh6NOzurSCMGRmCP8gb1VAXUlrSSsCFIGHGXtNiA=",
  },
  "Invalid password": {
    val: "잘못된 비밀번호",
    translated: "auto",
    h: "4JKuk5cidGqS+Yy2zWi8Bf+XYJLipTr94xQ+cPTJUVs=",
  },
  "Invalid transactions preventing import": {
    val: "잘못된 거래가 가져오기를 방지합니다.",
    translated: "auto",
    h: "smXPNWsiVwsLzBZ2L/sbD9IO3ZMxKyORNgcKAa3CFRE=",
  },
  "It says:": {
    val: "그것은:",
    translated: "auto",
    h: "gbWdWRhcKGQzFCi8CcKy9Bmfg2oYqz1zGMHQzSU8jQE=",
  },
  "It should say:": {
    val: "그건 이렇게 말해야 해:",
    translated: "auto",
    h: "RjwjZtmUgFzGUxR0zMmyXh0cHzpzsbj4nk6R7tGe+i4=",
  },
  "Keep account transactions": {
    val: "계정 거래를 유지",
    translated: "auto",
    h: "SA/tgP2OPX7K6/Rztew4oai82mmt7fqOHpOuCWNrPZU=",
  },
  "Keep accounts": {
    val: "계정을 유지",
    translated: "auto",
    h: "iQX3g3XL9mIf7uX5wDrQIhLNJ464eieqHwhtKtfSuoA=",
  },
  "Keep bucket transactions": {
    val: "버킷 거래 유지",
    translated: "auto",
    h: "0LwH6beBDlpdXvsVWW7nGj/5/tkz7gDk+Sm4Kltx3rQ=",
  },
  "Keep buckets": {
    val: "양동이들을 유지하세요",
    translated: "auto",
    h: "4lGk6/xvGOvn8z5vLVpqCLE6WQwpEoizH0LM95z1Tvo=",
  },
  "Kick Bucket": {
    /* Name of action.  Consider this "Archive Bucket" */
    val: "킥 버킷",
    translated: "auto",
    h: "3hmOuv1hNsjpQJ5cSDTlSqN4jGOGFnSPw9r0bK68RWY=",
  },
  "Kick the bucket": {
    /* Button label for archiving a bucket */
    val: "버킷을 차다",
    translated: "auto",
    h: "IvzeGJ9G+Rns8Rbnal26flTFzd+yBNSEBQSptdNy8t8=",
  },
  "Kicked": {
    /* Label for list of archived buckets */
    val: "Kicked",
    translated: "auto",
    h: "cWApfoLlcBvoHizIFtrDQq3uwrZIYMXKO1iLMvv8szI=",
  },
  "Language": {
    /* Label for application language preference */
    val: "언어",
    translated: "auto",
    h: "H6JLSQVzeo1QvqYd6ewWITP1MyGheSF5eFCeaP6nQwk=",
  },
  "Language default": {
    val: "기본 언어",
    translated: "auto",
    h: "B22VmGf23mHOBpC02z4zdK4P34035w3nWPUR86u0Dgg=",
  },
  "Last sync": {
    val: "마지막 동기화",
    translated: "auto",
    h: "ifqkf2oJbmCZakm2f0rOQonkEGgcRhI46mmhSM3tTbA=",
  },
  "Last updated": {
    val: "마지막 업데이트",
    translated: "auto",
    h: "BenCUeX0s7/BAYHFcK/s7yUcGW68Pyd1JDxeIPnbBGM=",
  },
  "Last used": {
    val: "마지막 사용",
    translated: "auto",
    h: "G5a6Jdor9jRT/Wtcg9SfXQsvqL7VFvnVD2+gq7yT1Jg=",
  },
  "Later": {
    /* Button label for purchasing a license later */
    val: "나중에",
    translated: "auto",
    h: "wZUl6R8m08S1l0zLg0xgDG2XE1sodemTuRDbalIB4VM=",
  },
  "Learn More": {
    val: "더 알아보기",
    translated: "auto",
    h: "8bk7nEyrz+Q0vmMisWIPVuvHR4/TeW4DhemALir6s1o=",
  },
  "License": {
    /* Label for page where you view license details */
    val: "라이선스",
    translated: "auto",
    h: "qmaEL5BHMIqGJ0RYbmhJPHnRV60sgX8a8RHEh3wAQvc=",
  },
  "License status": {
    val: "라이선스 상태",
    translated: "auto",
    h: "pB9DYc2XWzC+Y3NEmw4dc63G3dstNOjTOAgt+MPA5WU=",
  },
  "Life Insurance": {
    val: "생명 보험",
    translated: "auto",
    h: "CafgTI2ogIOqH6sg0xYnwgpDXmZ5SZQAsRY2jlTsp9c=",
  },
  "Light": {
    /* Option for theme preference */
    val: "밝음",
    translated: "auto",
    h: "C0avqWOAFWs6Zf7/577zzmx49uDbTZDSmLAJIQchfuE=",
  },
  "Limit": {
    val: "한계",
    translated: "auto",
    h: "tmPeisQPkoz4f2EpO/u0ThQPLC5ev6RKZzs4lkgatBU=",
  },
  "Limit:": {
    val: "한계:",
    translated: "auto",
    h: "fU5A7Xvpww+aXRMyXDk5JaooMFWEKRFeMBtm2aYfRXQ=",
  },
  "Link Account": {
    val: "계정 연결",
    translated: "auto",
    h: "Kq3pmMt0lHo1Or0xDzOxrUYLyhXtTVmVmcm/qGByIuk=",
  },
  "Local file": {
    val: "로컬 파일",
    translated: "auto",
    h: "CMhZhId2bqThTVsNh1c/YbZs+qOkFTdtsZA8px8zwA4=",
  },
  "Local files": {
    val: "로컬 파일",
    translated: "auto",
    h: "Atqw+RURXK7fFYEzxEV4d43UKK1kgVgoaKusNhnbGZg=",
  },
  "Local network client": {
    val: "로컬 네트워크 클라이언트",
    translated: "auto",
    h: "bI/iWjtuzv7DVDFzzviehzbWu1TWwURDNt++OVfSXEg=",
  },
  "Local network server": {
    val: "로컬 네트워크 서버",
    translated: "auto",
    h: "/eJCfyE7NbbJocHDU+wjKuxXQBWAzekC3W/Bue6h+nI=",
  },
  "Macro deleted": {
    val: "매크로 삭제됨",
    translated: "auto",
    h: "XdtVcRU7RheAlhzK15asG/s7ppztkgXITjJQkM833Rw=",
  },
  "Macros": {
    val: "매크로",
    translated: "auto",
    h: "yo4VuLKqBNhvEBgUZKyI2WypDrv1loL/wA1qO3u4Zq4=",
  },
  "Make Transfer": {
    val: "이체하기",
    translated: "auto",
    h: "Rmor5ffKqQTdDQSwA2x/hHhrr0zL7MceXGsR1vHe6b4=",
  },
  "Make it rain!": {
    val: "비를 내리게 해!",
    translated: "auto",
    h: "GCU3Hru9VCit7F+BYEMKmg5U8gsc1/UZ+o5wsbMAkeY=",
  },
  "Make it so": {
    /* Button label for causing the set of pending deposits/withdrawls to happen.  Synonyms could be: "Do it" or "Run" or "Go" */
    val: "그렇게 하세요",
    translated: "auto",
    h: "XRTIWjylWKAy5BW8/0C0rOSW5S1QC+CxmgmFfhi81pk=",
  },
  "Mark Cleared": {
    /* Name of action for marking a transaction as having cleared the bank */
    val: "청산 표시",
    translated: "auto",
    h: "Z+NICH1z9EYN3Ub7Z9idiTw/t+QaDF9n3h9br9WhjgE=",
  },
  "Mark Not Cleared": {
    /* Name of action for marking a transaction as not having cleared the bank */
    val: "미체크",
    translated: "auto",
    h: "4VoXUMr4nLIoyueiB8YlIR9HFGPYBhYxJq/cqqwDLs0=",
  },
  "Mass Update": {
    val: "대량 업데이트",
    translated: "auto",
    h: "8Vx8raw2DARWzkCbKtZrIQdXCP2vDzw/FMYKfw51Jcs=",
  },
  "Medical": {
    val: "의료",
    translated: "auto",
    h: "TcuCD6n7/CmRm/jdGZQLDvEdAVaJ2cDy2CahpUk9pCQ=",
  },
  "Memo": {
    val: "메모",
    translated: "auto",
    h: "9yClwoAwAV0+DXl8NnkkAnlUi+Ebp2soPwN5meYKgWY=",
  },
  "Memos To Payees": {
    val: "수취인에게의 메모",
    translated: "auto",
    h: "RrzhV+LUxgPfiFMK0krRxVfeKXhRquwgRwC8neBJ2Xs=",
  },
  "Merge": {
    val: "병합",
    translated: "auto",
    h: "mOHySNwxHH1kAQerMpBekxjTXkpm93+75ghAQZBI8YU=",
  },
  "Merge Budgets": {
    val: "예산 병합",
    translated: "auto",
    h: "7mOfG0hHFzdbEwVuhnSJP2QnEDVFQg4s3d8syq4EMHw=",
  },
  "Merge Payees": {
    val: "지급인 병합",
    translated: "auto",
    h: "E1u4wBRN09jfBf9R5K2xo80gFrGBuDEB39Ri7EL8bYw=",
  },
  "Merge already in progress": {
    val: "병합이 이미 진행 중입니다",
    translated: "auto",
    h: "oIEtjAX5TjxJ78OneCHljWt7hpmZS8AhezCjetJ2UEA=",
  },
  "Merge complete": {
    val: "병합 완료",
    translated: "auto",
    h: "4DUIP9c3KGNs5H3H3fnNnu8LfaHA4bB8PIds+wSy3jI=",
  },
  "Merge failed": {
    val: "병합 실패",
    translated: "auto",
    h: "6HNyKVatlEsWVRVgjSSAxmGoD1obkrMMWW6Ci7DLb3A=",
  },
  "Minimize": {
    val: "최소화",
    translated: "auto",
    h: "ELhkWGGY5oNKpfCzoXXW6TgkfS1nI0ZuJbWyYLmT+ro=",
  },
  "Misc": {
    val: "기타",
    translated: "auto",
    h: "DPoc7CIbzLHJxuar3WnaidO3Ryy1QtYkCswRzVHtVBg=",
  },
  "Month to Month": {
    val: "월 단위",
    translated: "auto",
    h: "VYq/DQYARQsjblXvXMijYnVbyFbLkqoRYmQ8IHhTbDQ=",
  },
  "Monthly": {
    val: "월간",
    translated: "auto",
    h: "r+AvQ06eYho/PFxjGz8FzHFmEfN+fjBpG0Yzic6/UgU=",
  },
  "Monthly deposit:": {
    val: "월간 입금:",
    translated: "auto",
    h: "GKlnbgfjEkmlOI0TT0pyfI30T1/0jrXjT01JZrBTpP0=",
  },
  "Months": {
    val: "개월",
    translated: "auto",
    h: "wW/jCiA3sxpdbZ8SZ50pYiOvxUk2Ix8T6WB3ZXkAS4s=",
  },
  "Move Account": {
    val: "계정 이동",
    translated: "auto",
    h: "ybDQ63l83HcIPrlccbfuOBNxeGYsiDmXI3tyTZ7nKZI=",
  },
  "Move Bucket": {
    val: "버킷 이동",
    translated: "auto",
    h: "6lJYNJMplvVHQuXlFYBD81+4kgQQb1SwZ0s13hvlIfI=",
  },
  "Move Group": {
    val: "이동 그룹",
    translated: "auto",
    h: "zSmn/C+X/cbh/GqqDMPetNfBb8iTmlwFh9Dsbc9qe9k=",
  },
  "Move all transaction memos to blank payee field": {
    val: "모든 거래 메모를 빈 수취인 필드로 이동",
    translated: "auto",
    h: "Ibe3mbvnAzB2IdenvVSIAQdz1//j2Hd5vMpVIn+CH+8=",
  },
  "NO": {
    val: "아니오",
    translated: "auto",
    h: "hxXybQ1uFw+QDmCTj+3XDrm4sicWa7ZqmazhYaf5Nr8=",
  },
  "Name": {
    /* Remote device name */
    /* Label for sharing avenue name */
    val: "이름",
    translated: "auto",
    h: "bMXfNfAzjiMOnmM+rZmR8I9iyrRaMmSXja7cZ0eGcwU=",
  },
  "Natural gas/propane/oil": {
    val: "천연 가스/프로판/오일",
    translated: "auto",
    h: "CMjkKDPUYAAymOaPiz0PkXS6Ec3BTRWuNZJQ34kHA5s=",
  },
  "Need ideas for getting started?": {
    val: "시작하기 위한 아이디어가 필요하신가요?",
    translated: "auto",
    h: "JLW3ar4riykgYXyTGeMCNqL+wes0evHH6RERa+qXPaw=",
  },
  "Needs": {
    val: "필요",
    translated: "auto",
    h: "RbGrwaVYaT8OdEbNo5YBRWxoGZNYzZKjiDz7JrZVuuc=",
  },
  "Negate": {
    /* Verb meaning to make a number have the opposite sign */
    /* Verb meaning to make a number have the opposite sign */
    val: "부정하다",
    translated: "auto",
    h: "dZDdZz59qbx8gpMDeqIXTcDabOUtC1qWeUHncjptLo0=",
  },
  "Negative": {
    /* Label for choosing which value wihtin a CSV file represents negative */
    val: "부정",
    translated: "auto",
    h: "uu+tZJYytTWkRjWGnhq7P28TYmWJ58RmQcbAv4QEakg=",
  },
  "Net": {
    val: "넷",
    translated: "auto",
    h: "QITdwYnhK1fVfALCDc6jQhY2jLIUBpPp0/bSHOX6p9M=",
  },
  "Net Transfers": {
    val: "순 이체",
    translated: "auto",
    h: "4FYbJ2rCxhrWW9XBurKbS2mOSTwlxIXH/jCv5FDofeM=",
  },
  "Net Wealth": {
    val: "순자산",
    translated: "auto",
    h: "XKjeMQyciPmv55LHmQ9l0ulp6PwrF1QA1lN2Pua1Kk8=",
  },
  "Net change": {
    val: "순 변화",
    translated: "auto",
    h: "1giQvPYkVc99a5Ne06RbukR0UJUQY2ba1gRrQHE31bA=",
  },
  "New Bucket": {
    val: "새 버킷",
    translated: "auto",
    h: "FchHrB6weykpHiqRVxc5QKb6BEdhH4DXrc+t6RNcF8M=",
  },
  "New Budget...": {
    val: "새로운 예산...",
    translated: "auto",
    h: "daxIu+dqn7pfUDeB26rLQnPnAz2v5opSTHbAyBovaoI=",
  },
  "New Group": {
    val: "새 그룹",
    translated: "auto",
    h: "1dmXA/VlW+tjhojOGcypAy70L2wupHf9EdVjUByvpmA=",
  },
  "New account": {
    val: "새 계정",
    translated: "auto",
    h: "MtAiANg7ugdeUiGmiGklfBPG4T1igh1iChKeC0Mdxnc=",
  },
  "New avenue": {
    val: "새로운 길",
    translated: "auto",
    h: "EyqJb2lqkOre5EVjsnQYGA3tj0tYdB/UHeT1HQmp6g4=",
  },
  "New bucket": {
    val: "새 버킷",
    translated: "auto",
    h: "aIKjDQtVbUMjIHU/6fccfiWBUIwUBnAofdzRJTCuytI=",
  },
  "New car": {
    val: "새 차",
    translated: "auto",
    h: "Bp27l6cn2XdsJhTwsG7CqndX5v6581sQjpY4tMVeh88=",
  },
  "New computer": {
    val: "새 컴퓨터",
    translated: "auto",
    h: "zrx1OP3GJYjfIIZU0Sa31Mm3aQjGco6OnX25VqxnLlY=",
  },
  "New phone": {
    val: "새 폰",
    translated: "auto",
    h: "v6DgXaDFo1Yjq7Cyz8tC29KXNgr704sFNCnXIedKsHw=",
  },
  "New roof": {
    val: "새 지붕",
    translated: "auto",
    h: "AzV1g+0ivzcHHsk+jxoIrHthrDJ7wuVUOfurDtwV3j8=",
  },
  "New transaction": {
    val: "새 거래",
    translated: "auto",
    h: "1VsMSv2xvSjfHSqSZPw0gw1fD9E+Jvyr+2JVT/4bt64=",
  },
  "New value": {
    val: "새 값",
    translated: "auto",
    h: "IYMui0S7sNqh1DSN12/iCzLNTNeExrjoZ96g5EkvRgc=",
  },
  "No": {
    val: "아니오",
    translated: "auto",
    h: "ssvE4uVUWmxD9vjMjw5HZnc/psg9I4B2MTtvoeNJyvY=",
  },
  "No conflicts": {
    val: "충돌 없음",
    translated: "auto",
    h: "UlN5g4bplbpYSjOMLbuCBZ5ICB8dMKhKiRial9fMUF8=",
  },
  "No name": {
    val: "이름 없음",
    translated: "auto",
    h: "Z85JCnN1GdDw+yMwZqwW8aeKgQkvCHCkVIkIjZt7G00=",
  },
  "No, don't connect": {
    val: "아니요, 연결하지 마세요",
    translated: "auto",
    h: "MaiZRnZgYzKFsvyy1L/fnIA4McuhD8MAo4t+Rw216oE=",
  },
  "Normal": {
    val: "보통",
    translated: "auto",
    h: "hjYDsfwaNZVxJ5eupqHy97JfTq/YAPm+bD+Zx0zrGuU=",
  },
  "Not Transfer": {
    val: "전송하지 않음",
    translated: "auto",
    h: "GJsf5+RmvoXTk3dewQIb90+6xb+mujI/mpSM8cmgUEI=",
  },
  "Not running": {
    val: "실행되지 않음",
    translated: "auto",
    h: "PC00/YYL+rTs9SryRz4ennpjhF/LuzL/1aMY6Hiajmc=",
  },
  "Not yet cleared": {
    /* Tooltip text indicating that a transaction has not yet cleared. */
    val: "아직 청산되지 않음",
    translated: "auto",
    h: "Hf/KSsxHfxvXx0udkqgCw/QkkE8Vi5ex9pdYnX6qzEU=",
  },
  "Note": {
    val: "노트",
    translated: "auto",
    h: "omcHOlFDF1aMLf9t2/tJ9R1dYEFSQC9IiPuXLXuFwEk=",
  },
  "Nothing found matching:": {
    val: "일치하는 결과가 없습니다:",
    translated: "auto",
    h: "NF10b/Nmjj8holFGK7KIiaJhSb8bsL9Zt/Fa8fFy4gk=",
  },
  "Number format": {
    /* Label for budget number formatting preference */
    val: "숫자 형식",
    translated: "auto",
    h: "RxooctpubAJr5NcKn57a5kjGBEdlPT5b2h6PUFLqxxE=",
  },
  "OBJ.account_id": {
    /* Account label */
    /* Account label */
    val: "계정",
    translated: "auto",
    h: "ihCgI4A9UaFZ63kuiKXqFHoGsze2dYwzpgSVU0clMfQ=",
  },
  "OBJ.amount": {
    /* Transaction amount label */
    /* Transaction amount label */
    val: "금액",
    translated: "auto",
    h: "DHNNaJF4hWTWIFdaMdMhUT4aSdti7ZfaNexABzxWWzc=",
  },
  "OBJ.created": {
    /* Object creation date label */
    /* Object creation date label */
    /* Object creation date label */
    /* Object creation date label */
    /* Object creation date label */
    /* Object creation date label */
    /* Object creation date label */
    /* Object creation date label */
    /* Object creation date label */
    /* Object creation date label */
    /* Object creation date label */
    /* Object creation date label */
    val: "생성됨",
    translated: "auto",
    h: "8ELUP5FRI8KPKAswN0H7ALwQ3sP6liJQvRN5tbeBYzo=",
  },
  "OBJ.id": {
    /* Object ID label */
    /* Object ID label */
    /* Object ID label */
    /* Object ID label */
    /* Object ID label */
    /* Object ID label */
    /* Object ID label */
    /* Object ID label */
    /* Object ID label */
    /* Object ID label */
    /* Object ID label */
    /* Object ID label */
    val: "아이디",
    translated: "auto",
    h: "ge86Jcy26vcv5uPFI29MfLOxHh8ctACck6nRdrl9aM4=",
  },
  "OBJ.last_used": {
    /* Last used date label */
    /* Last used date label */
    val: "마지막 사용",
    translated: "auto",
    h: "G5a6Jdor9jRT/Wtcg9SfXQsvqL7VFvnVD2+gq7yT1Jg=",
  },
  "OBJ.memo": {
    /* Transaction memo label */
    /* Transaction memo label */
    val: "메모",
    translated: "auto",
    h: "9yClwoAwAV0+DXl8NnkkAnlUi+Ebp2soPwN5meYKgWY=",
  },
  "OBJ.notes": {
    /* Object note label */
    /* Object note label */
    /* Object note label */
    /* Object note label */
    /* Object note label */
    val: "노트",
    translated: "auto",
    h: "omcHOlFDF1aMLf9t2/tJ9R1dYEFSQC9IiPuXLXuFwEk=",
  },
  "OBJ.payee": {
    /* Transaction payee */
    val: "수취인",
    translated: "auto",
    h: "vEPcESYpxu8dkXCIJQFVpBeYbocJdS1ypbD50YW9B7Q=",
  },
  "OBJ.posted": {
    /* Transaction posted date label */
    /* Transaction posted date label */
    val: "등록됨",
    translated: "auto",
    h: "h6jjM8ytGdEj+QfDnTVzEdq+0oLSE9zd+MArY7gtjzU=",
  },
  "OFF": {
    /* Label for toggle switch OFF */
    val: "끄기",
    translated: "auto",
    h: "g0c9fS73Ra/6fEcgtA+AZ5QtmmCEO7dX81vP7YtzM4o=",
  },
  "OK": {
    val: "확인",
    translated: "auto",
    h: "mMSSK7ZBxlx6MLe8r98jC5sAtmk2McVhRqslsnhu5KM=",
  },
  "ON": {
    /* Label for toggle switch ON */
    val: "켜짐",
    translated: "auto",
    h: "wZR/9OiLHV0XO5Mm9aURB4fbSWSyea2Z6CQce8Q14gU=",
  },
  "Off Budget Accounts": {
    val: "비예산 계정",
    translated: "auto",
    h: "EQ0I5sn/xpO55GIvIhUF8/XeTi0g5sxvvyE7TiynJDQ=",
  },
  "Off budget": {
    val: "예산 외",
    translated: "auto",
    h: "cw3ZD6kn6Mat0qZqOZP0Is9hg7xmOxrKqKCD8CIjmz4=",
  },
  "On": {
    val: "켜짐",
    translated: "auto",
    h: "nMAfqtecKNqqRD1YLNX1F32SXJy1exEgm1QvpnZLBQQ=",
  },
  "Open Anyway": {
    /* Label for button to indicate that a budget file should be opened even though it was made with a newer version of Buckets */
    val: "그래도 열기",
    translated: "auto",
    h: "C3I8WidkzZOLAGX0ypckK7pR7+e/M/X/YVIV1GCTYms=",
  },
  "Open Buckets Budget": {
    val: "오픈 버킷스 예산",
    translated: "auto",
    h: "5odppwzoA5bC5nAM3F+GDOVrAq3NfjGxrE0ZFXseCDg=",
  },
  "Open Budget...": {
    val: "예산 열기...",
    translated: "auto",
    h: "67FfAce57aSIe2ncVfWeIeiiRLQQ8uuEUdDyI6UHxHU=",
  },
  "Open Recent...": {
    val: "최근 파일...",
    translated: "auto",
    h: "Uf1w3VIwUvsmKvOkQtBwsGvbRzQ5gMbEq/iyNzv95cs=",
  },
  "Open Transaction File": {
    val: "거래 파일 열기",
    translated: "auto",
    h: "8teUT2P/KToCDoMTqS88JNVtG9PTE/5PojtS1SGmokw=",
  },
  "Open Web YNAB Zip File": {
    val: "웹 YNAB Zip 파일 열기",
    translated: "auto",
    h: "etHUkWVrpkdYsNeOHkK2wLKMkL4YYkEjNO4WwPdIPMY=",
  },
  "Open YNAB4 File": {
    val: "YNAB4 파일 열기",
    translated: "auto",
    h: "BrKgvN0SgW410a7e11V3gP+FgW67iTGIY+o/cKI1Ftk=",
  },
  "Opening balance": {
    val: "개시 잔액",
    translated: "auto",
    h: "OEuQ3gAWrV+lPay2usXLKN3bNCH87PEsrcr+thNNbJY=",
  },
  "Optional message:": {
    val: "선택적 메시지:",
    translated: "auto",
    h: "zVM8610w5Mn1yRIYOsmOY5ZxBd2KLIudsimw610auYU=",
  },
  "Or click to download the new version manually.": {
    val: "또는 새 버전을 수동으로 다운로드하려면 클릭하세요.",
    translated: "auto",
    h: "J+hkW+8xOyf72R6IgkvGlwWYNzHN+/aWRtotPks3C5U=",
  },
  "Other devices have made the following files available. Choose where you would like to save them on this device.": {
    val: "다른 기기가 다음 파일들을 사용할 수 있게 했습니다. 이 기기에 저장할 위치를 선택하세요.",
    translated: "auto",
    h: "Fbk5s0n43m2f5wfmDIpYQniAcPes2dp0Opv/VxSZJGE=",
  },
  "Out": {
    val: "아웃",
    translated: "auto",
    h: "v4Oj0CQx7cmHP4mcJsZX4xMTzMzeFS81XA9gU3qOFKU=",
  },
  "Overwrite budget from backup": {
    val: "백업에서 예산을 덮어쓰기",
    translated: "auto",
    h: "p47XTJ4eKHU3WYE+YwdBvSL80vnN/gn5Xf7C+/gs66U=",
  },
  "Pairing code": {
    val: "페어링 코드",
    translated: "auto",
    h: "vEvXjrpoLPbXr+M9YBSVz5TplRIOw8ghDETxlgdUp7k=",
  },
  "Password": {
    val: "비밀번호",
    translated: "auto",
    h: "nhByOwQBMFlIuzeSPsoMPTnOwa4wBUBDjDxArgBfXjE=",
  },
  "Password not yet set": {
    val: "비밀번호가 아직 설정되지 않았습니다",
    translated: "auto",
    h: "8NXPDxaFV7KVroTg3YTaO/dWsepbJT/ASSZw9yGeD5g=",
  },
  "Password reset": {
    val: "비밀번호 재설정",
    translated: "auto",
    h: "dVWv+2lbwYUiQVBBqp1wHOfyMDlGJq8aqtvWV20t/Ns=",
  },
  "Passwords did not match": {
    val: "비밀번호가 일치하지 않습니다",
    translated: "auto",
    h: "PyUeXNOVYhNDM/De1HIPLeiwy6d+x7bkZphOo5ZqR6Q=",
  },
  "Paste": {
    val: "붙여넣기",
    translated: "auto",
    h: "n2Hnio0AcQPZejqQ+hm35GthBg0zYDNoxd8RCFRUhu4=",
  },
  "Paste and Match Style": {
    val: "붙여넣기 및 서식 맞추기",
    translated: "auto",
    h: "w8hRIxBBNWtXNPcYtQ4t/mTHfPF66U/mJbVpOiIDgYE=",
  },
  "Paused": {
    val: "일시 정지",
    translated: "auto",
    h: "sMAADusAjpKEUapa7bSzeAnEAbEGpH+NKBgGh068Ifw=",
  },
  "Payee": {
    val: "수취인",
    translated: "auto",
    h: "vEPcESYpxu8dkXCIJQFVpBeYbocJdS1ypbD50YW9B7Q=",
  },
  "Payees": {
    val: "수취인",
    translated: "auto",
    h: "YjA+7FE+9F3uMVjqhQQyv29+TRFaEMDJfFGbbX1+9aI=",
  },
  "Pending merges": {
    val: "대기 중인 병합",
    translated: "auto",
    h: "7vaBvdca+0T8ZgfGLkLVyTGgsK9QgFVnFdWRmqi8cbw=",
  },
  "Pending...": {
    /* Status when a connection to another device is pending but not complete */
    val: "대기 중...",
    translated: "auto",
    h: "EBff3fGHatt8ejJo8RfuFp62oI9ZKjguA+ZUW6tDU7I=",
  },
  "Permanently delete account and transactions": {
    val: "계정과 거래를 영구적으로 삭제",
    translated: "auto",
    h: "mSRS1xHHrwwVBuWBlj7RZIGTyGuUy4GwrwOFty5tZrU=",
  },
  "Personal Loan Payment": {
    val: "개인 대출 상환",
    translated: "auto",
    h: "cL5KAz7DWc3XTzI4eo3t1PaGUe16WM+dKBg2ykfpQ6A=",
  },
  "Phone": {
    val: "전화",
    translated: "auto",
    h: "9WrpirmkhUIuWq47S+FrVpJP+prT4uInaMOfMHjxS8c=",
  },
  "Playing": {
    val: "놀이",
    translated: "auto",
    h: "69elN/r6NyshRWtcjLOKso9OmdOJhvg/ix+Xy/fE+Z0=",
  },
  "Please enter your Buckets License below.": {
    val: "귀하의 Buckets 라이선스를 아래에 입력하세요.",
    translated: "auto",
    h: "xbsLH9dKhhcdpY6+CFD5E3/4IdnZZk49WmeisyuQ/oo=",
  },
  "Port": {
    val: "포트",
    translated: "auto",
    h: "u+5cy7Hv8eqnpUCJUVP2QmhGFpu7Zq4UquU/U7tcspI=",
  },
  "Possible Duplicates": {
    val: "가능한 중복",
    translated: "auto",
    h: "ofGzHt7c7jfCo867EwNvCl3vCUJPLeLhFiC5Fmgrgp4=",
  },
  "Posted": {
    val: "게시",
    translated: "auto",
    h: "h6jjM8ytGdEj+QfDnTVzEdq+0oLSE9zd+MArY7gtjzU=",
  },
  "Preferences...": {
    val: "환경 설정...",
    translated: "auto",
    h: "6iQxyJ1WC9/Z0f0saApfwL5hmhgN5YgJeikLAYqCGBI=",
  },
  "Preparation": {
    val: "준비",
    translated: "auto",
    h: "hAU2jJdFn2hdOUvG6S3yousGGeHnblb2/CsaRHWvQwQ=",
  },
  "Preview": {
    /* Noun */
    val: "미리보기",
    translated: "auto",
    h: "ICJraNVGcHJ6dorVH3VtTMdwZV8dD6wjEdY0Jzm4qbA=",
  },
  "Print...": {
    val: "인쇄...",
    translated: "auto",
    h: "Zx0axQhFFBAeUJiZxUAcm9hrf0Dd7+kTskEK3MSkm1Q=",
  },
  "Prompt": {
    /* Title for prompt window */
    val: "프롬프트",
    translated: "auto",
    h: "56HrS6R0zfyg5ruiVb/J04UP3T8O2V99V+mXHvVfEZ0=",
  },
  "Purchase": {
    /* Button label for purchasing a license */
    val: "구매",
    translated: "auto",
    h: "SfwhUMXO5ckJhwUkBjdC9n17k8zH4+hoAlFoUdOwE/g=",
  },
  "Purchase Full Version...": {
    val: "전체 버전 구매...",
    translated: "auto",
    h: "+6h2Y0QTHEVui0aUhwAlCsyJp/F+S0PYKMRlQysqjrk=",
  },
  "Purchase license": {
    /* Button that takes people to purchase a license */
    val: "라이선스 구매",
    translated: "auto",
    h: "3LYaot06ClRiLOZ31fOKIxzRXO8X0w5qFIfav969me8=",
  },
  "Quit Buckets": {
    val: "버킷 종료",
    translated: "auto",
    h: "QILEHXgAk6vuNPV3rqkbn2QRZ8WKrPnAZnscp7n8WaM=",
  },
  "Rain": {
    val: "비",
    translated: "auto",
    h: "fqeHyOaOYnCtGAcJlJbhAR37DG6YMrsasUNtiL6z8hc=",
  },
  "Rain left": {
    val: "비가 떠났습니다",
    translated: "auto",
    h: "+xrBpD9ex3fqQgh+YuNxsFxWyrbE8G1236f81k2whuY=",
  },
  "Recently used": {
    /* Label for list of recently used buckets files */
    val: "최근 사용",
    translated: "auto",
    h: "tJ5cBjszrV/JztG5V1FUrgo0bfVgXfK5KB495TvGsYs=",
  },
  "Record change as transaction": {
    val: "변경을 거래로 기록",
    translated: "auto",
    h: "yK0UuSf6pOl+44YBzW+tFNPHt6YYpqe88f+wQCuaHcQ=",
  },
  "Recording": {
    val: "녹음",
    translated: "auto",
    h: "s1hytW8ZlaU8eRtoTfV+4aCpW5biiyifheE3t0kouUo=",
  },
  "Recurring Expenses": {
    val: "정기 지출",
    translated: "auto",
    h: "yDp5Agru+QzDSy583s3kjOdZbbe6X1WDfMeSNXsYlaY=",
  },
  "Redo": {
    val: "다시",
    translated: "auto",
    h: "7buMF65dyGtKDY/ZW/Lkn7eUmdudCsdGV3KR2lYLLA0=",
  },
  "Regenerate": {
    val: "재생성",
    translated: "auto",
    h: "u5QDOgMBGl3INOqya7C/iE0tXSBbYdhLgcM9mBSHQ6k=",
  },
  "Registered to": {
    /* Label for the name/email of the person this application is registered to */
    val: "등록자",
    translated: "auto",
    h: "fDXs0ZL8cmmMNVzrdFyhb8+RwdyTtA2b9yOO1B0nTrA=",
  },
  "Relay client": {
    val: "릴레이 클라이언트",
    translated: "auto",
    h: "mSWVLtN7G9ZyP/WXAVEiOcbZQJIK6YenAW9E0ZZS3B0=",
  },
  "Relay server": {
    val: "중계 서버",
    translated: "auto",
    h: "+cMcGjAKTrxBcgm02bYOEYsUTqHNoQJayrxZ+3L3Nag=",
  },
  "Reload": {
    val: "새로 고침",
    translated: "auto",
    h: "hUVVd3tppLGqwgo2OeC3h334aTF0Y+/GHbuL/I1clYk=",
  },
  "Remote device": {
    val: "원격 장치",
    translated: "auto",
    h: "kGM8ugCEJGdTGfBFNcwYe5BNeXY+Wh9J4nYpxeXj2ZY=",
  },
  "Remote devices": {
    val: "원격 장치",
    translated: "auto",
    h: "Pnrxp4rS7bnapZb26P4HXC5hFardsCyTT6Idz/SFJuE=",
  },
  "Remote file": {
    /* Noun; label for budget filename */
    val: "원격 파일",
    translated: "auto",
    h: "56l/nivDa2uMpQGnE8MPPBt60GjEgxNG5Cr/fNrTlO8=",
  },
  "Remove Categorization": {
    val: "분류 제거",
    translated: "auto",
    h: "b5sIQMfXAnBAqHD2NJfIgIAxclRGe5LJ7NzzF6sOruQ=",
  },
  "Rent/Mortgage": {
    val: "임대/모기지",
    translated: "auto",
    h: "sCLO0xIawRUzVC3QV8aqowoCCfwYNvtXW848jCLfT10=",
  },
  "Reopen": {
    /* Label for button to reopen a close account */
    val: "재개",
    translated: "auto",
    h: "5497b4yxPFO2M524tL0qmmNk47Qv/aca/7n0zMEeX/o=",
  },
  "Reopen Account": {
    val: "계정 재개",
    translated: "auto",
    h: "KBv9ohpTpLSanhr/AFbKdJCA0VZ1iJ0THB53Hut00v4=",
  },
  "Report Bug": {
    val: "버그 신고",
    translated: "auto",
    h: "RxuE9Dh0Dadda2PtjUPD0dQ7b8aQok84Ytvw31ABBRU=",
  },
  "Report Bug...": {
    val: "버그 신고...",
    translated: "auto",
    h: "i17nG0QruMiCn612ogDToWB1g4xqqei691Yeh/t8MIk=",
  },
  "Report Translation Error...": {
    val: "번역 오류 신고...",
    translated: "auto",
    h: "/jSK7LcBLJ1FsOYb9ntsVYAxwAyGLLUZXlTL/zrC020=",
  },
  "Required deposit:": {
    val: "필요한 예금:",
    translated: "auto",
    h: "Q34JZduUI2Lx8xxjkeH/Md92nqWgEcbPFZjgf5m7tXA=",
  },
  "Reset Password": {
    val: "비밀번호 재설정",
    translated: "auto",
    h: "PHk0gZ6FwtHbvhVQhAv2NOv4tUth66ZawXknegPfOIU=",
  },
  "Reset bank macro password": {
    val: "은행 매크로 비밀번호 재설정",
    translated: "auto",
    h: "aGiRaSU/j/Kke84s+8fSjfD+y1hVndJAUFpywUJVq50=",
  },
  "Restart Buckets": {
    val: "버킷 다시 시작",
    translated: "auto",
    h: "TNcYWk7YxhZ0U9Q+mFMRedeWB36VsDXoYgBapDvZCgM=",
  },
  "Restart Buckets for changes to take effect.": {
    val: "변경 사항을 적용하려면 Buckets를 재시작하세요.",
    translated: "auto",
    h: "WDqnfUftItQB8zteFdZrFOknNYODkXCwU89Lk/Hs/SQ=",
  },
  "Restore from backup": {
    val: "백업에서 복원",
    translated: "auto",
    h: "4/wBBIqPRkVkrgO1WQ28ED/bEOnF9yg7FMna28aBMC0=",
  },
  "Restored budget from backup": {
    val: "백업에서 예산 복원됨",
    translated: "auto",
    h: "ETnF9ML8onmHyfTrUsxJwyn/DQp3IFbSD1m6PNM9CAU=",
  },
  "Reverse": {
    /* Label for checkbox indicating that transactions should be imported in reverse order */
    val: "역순",
    translated: "auto",
    h: "asyh3SM4xzCuJwKJ77z/6mR7GortI9HKht5YBJYkHnk=",
  },
  "Run": {
    val: "실행",
    translated: "auto",
    h: "msfklVWTzDTqa2SaDeN2NULTRVjZPdgr6/gggE5vemI=",
  },
  "Running": {
    val: "실행 중",
    translated: "auto",
    h: "Fc5kaM2PdFj1JUHmSYpQFl5RnVw8wUq7J00zdnDXNBc=",
  },
  "Running...": {
    val: "실행 중...",
    translated: "auto",
    h: "a2doeW7lyGRq5yq2cOD55HCblS7Hfy72/2G0cp7fk9c=",
  },
  "SQL Query": {
    val: "SQL 쿼리",
    translated: "auto",
    h: "SNOm941c8lDAaYjd9suzSEkHFjFRo8e683rumVLZhoA=",
  },
  "Save": {
    val: "저장",
    translated: "auto",
    h: "wduD0WXtkIpIb6B4R8AA7ph724u3/Gtv27uaky6rEAU=",
  },
  "Screenshots:": {
    val: "스크린샷:",
    translated: "auto",
    h: "Vl/m/PU/CoPSp/t+drAAfxlQ818VKjlWKN8fsB4/+V4=",
  },
  "Search": {
    val: "검색",
    translated: "auto",
    h: "vembE+Cp1aKCKR2j2LCJD29QyiQxfGPUcGI1I8l5/5Y=",
  },
  "Search categories": {
    val: "카테고리 검색",
    translated: "auto",
    h: "IScCkXq3OcNUufpAsgrWXkdRVqBrowHYo2hdSPS+X7I=",
  },
  "Search...": {
    /* Menu label for search page */
    val: "검색...",
    translated: "auto",
    h: "TOtty3gn23+64CNUlKn+bNe2V0f4xfUBGLHQ/Pw8XKQ=",
  },
  "Search:": {
    val: "검색:",
    translated: "auto",
    h: "OHBHBOVnuMjmjWHZURDrna8FWv+geQYMQuobRo4tkq0=",
  },
  "Searching...": {
    val: "검색 중...",
    translated: "auto",
    h: "7gAp07Zv3EjrgHoWJ04wEdRefy/aQ0zT8Y2EgQrnbHo=",
  },
  "Select All": {
    val: "모두 선택",
    translated: "auto",
    h: "tLJuQPindRFUyvGGdMLJbBHcVpAODsfT5p2gDnpB/Oo=",
  },
  "Self debt": {
    val: "자기 부채",
    translated: "auto",
    h: "zRWPLHqBTGcGqHHBHWdXpN2eOUUhRhvCyeAccFlR9Z4=",
  },
  "Send Report": {
    val: "보고서 보내기",
    translated: "auto",
    h: "aLgG0qubuw0p0tGIUYKjgxecVsL0e3AKvQ5+W2JZg18=",
  },
  "Services": {
    val: "서비스",
    translated: "auto",
    h: "Y5+GuNZXfFSynDsHvAY8cr0RqU+moaHZNmOk2eQrsNs=",
  },
  "Set Mapping": {
    /* Undo/redo label for setting the mapping of a file import */
    val: "매핑 설정",
    translated: "auto",
    h: "0VIJHYOJcEvpUbDh2MFyEtmMxHbY10WbgLG0YVeRSng=",
  },
  "Setting": {
    /* Noun: a single budget setting */
    val: "설정",
    translated: "auto",
    h: "VPMIV8ll2EYKjYDlgvDS3IbSSfjmE5VmCEGwFTHn/ys=",
  },
  "Settings": {
    val: "설정",
    translated: "auto",
    h: "g5CfgkRu6cPoKgSs58kE8baksjDRuXC1WTLWKVn75z0=",
  },
  "Share with": {
    /* Label for remote devices a budget is shared with */
    val: "공유 대상",
    translated: "auto",
    h: "U9hHc0V4Fpw0S1hjtdNc0UEGCP7X6n6JmCeoSW/LgVo=",
  },
  "Shared folder": {
    val: "공유 폴더",
    translated: "auto",
    h: "oeX6u9PQi6wT6MDH6F+w/A90h0XaexWgp2eca3mEfbE=",
  },
  "Sharing": {
    /* Label for sharing preferences */
    val: "공유",
    translated: "auto",
    h: "+wdr1d9w83UkBcXqGDOkGlmDhl24ktIp0it2O14f4kE=",
  },
  "Sharing key": {
    val: "공유 키",
    translated: "auto",
    h: "T90VMQdBq1lWvcHGfsIRWyHfGz8aM9ZB2cWLO1VoH2Q=",
  },
  "Show All": {
    val: "모두 보기",
    translated: "auto",
    h: "Kng6HqlojyhuqEK6kaB3KPtAs1w0LcpFWkJYrscali0=",
  },
  "Show Budget File...": {
    /* Show the current budget file in Finder/Explorer */
    val: "예산 파일 표시...",
    translated: "auto",
    h: "iMBwVJg17i7WagCWW3Att0OrtczZYyVqAM7PDdo5sXk=",
  },
  "Show Log Files...": {
    val: "로그 파일 표시...",
    translated: "auto",
    h: "In00T9z1A4xO6nLu8zAU5s3UzH3+IcK4XjRvrT9CGMs=",
  },
  "Show debug info": {
    val: "디버그 정보를 표시",
    translated: "auto",
    h: "TXWI2u7pYf+GGAZ9ed2OwHkF93XqFdRCj1q7sE4PsnQ=",
  },
  "Show folder": {
    /* Button to open a folder */
    val: "폴더 열기",
    translated: "auto",
    h: "479YuRtJUsvCCqzaEjK+WyPmy20v+YQPfY3Xo/eIzKM=",
  },
  "Show full changelog": {
    val: "전체 변경 내역 보기",
    translated: "auto",
    h: "nu/b3QeVa2N7QmrPffBdK2zSVYIp81gVGbFjcYrlL5A=",
  },
  "Sign": {
    /* Noun referring to the sign of a number (positive or negative) */
    val: "부호",
    translated: "auto",
    h: "uw6BT7o9vlsgV2TpwBFx/MfF1npvA+6ru4lXXcSzoCM=",
  },
  "Sign in to the YNAB website, click My Budget then Export Budget.": {
    val: "YNAB 웹사이트에 로그인한 후, My Budget를 클릭한 다음 Export Budget를 하세요.",
    translated: "auto",
    h: "etFjjZd2+flhi9J3CbiPL8eb4Gc3jHFAKkMPuQZmxlA=",
  },
  "SimpleFIN Connections": {
    val: "심플핀 연결",
    translated: "auto",
    h: "yzXdwvSSNy+FUFHW5+bAqRMq+j6krsNUFb/uFreKPNY=",
  },
  "SimpleFIN connection": {
    val: "심플핀 연결",
    translated: "auto",
    h: "g+4foa5uuY9Yv3vI/gA6gaEoNUJi2k4oFouZlUWwv/U=",
  },
  "Since some buckets have negative balances, this payment balance may not be what you actually have available for a payment.": {
    val: "일부 버킷에 음수 잔액이 있기 때문에, 이 지불 잔액은 실제로 지불에 사용할 수 있는 금액이 아닐 수 있습니다.",
    translated: "auto",
    h: "DcT2jCu9H9VSH4esyPHz75dbhviMkM3N/TD1N6PtYyM=",
  },
  "Skip This Version": {
    val: "이 버전을 건너뛰기",
    translated: "auto",
    h: "YnC7GSI4QITirt1GGV/Tc1FvTbJYICkEeF3zj4u4eak=",
  },
  "Skip invalid": {
    /* Label for checkbox which controls skipping invalid transactions during import */
    val: "무효 건너뛰기",
    translated: "auto",
    h: "sKPi3ongM5VPkq2aFjBN1FX9/N/KiThGWd54qaHNfi8=",
  },
  "Speech": {
    val: "연설",
    translated: "auto",
    h: "i4Qm95bH8zVEbjpkUi7jvQiLtDzGkW9z90XEkiglzHM=",
  },
  "Spending Money": {
    val: "용돈",
    translated: "auto",
    h: "7mLvCPVxhYqWXYW8EcSN4N6vyUtQqT4PnR0iC1ucTtY=",
  },
  "Start Merge": {
    val: "병합 시작",
    translated: "auto",
    h: "48IhJ8jvgXzTH0cgI8MR9W3NiQFlvBbJA/j7mj6KFhY=",
  },
  "Start Over": {
    val: "다시 시작",
    translated: "auto",
    h: "hlKNxy6ZDz4ny/qpQfkv6FwXDangtq2ECEo+ICgEbJs=",
  },
  "Start Speaking": {
    val: "말하기 시작",
    translated: "auto",
    h: "v8sFOpEAoczjEjGparKZylHWHoxHMVQriwuhJaec2rY=",
  },
  "Start with a template": {
    val: "템플릿으로 시작하세요",
    translated: "auto",
    h: "HbSWD1rCMlssQIfvhdN+qwtdXT/k2Rq4+lTObtGpWbo=",
  },
  "Status": {
    /* Connection status of remote devices */
    /* Label for connection status of sharing avenues */
    val: "상태",
    translated: "auto",
    h: "fu712YZJJBbNWIpP5QaYV+fcz5rcN4DkkaOGdL/X6hk=",
  },
  "Step took too long": {
    val: "단계가 너무 오래 걸렸습니다",
    translated: "auto",
    h: "Py3rsk0guEg0d8Ce9Lbfwzf1zP7E4Z8YPSOu165mOc0=",
  },
  "Stop Speaking": {
    val: "말을 멈춰",
    translated: "auto",
    h: "Pme2/qME7bKdVrHTIEBQYt1Fu/SXRNGyy6sLBfKpqqk=",
  },
  "Stopped": {
    val: "중지",
    translated: "auto",
    h: "9KSqBDjMEVALs44MtvCW75xXb7Ta+lGl6bMoOlDV824=",
  },
  "Student Loan Payment": {
    val: "학생 대출 상환",
    translated: "auto",
    h: "j83e9PkiJgq0J5iPOaku/mbjw9H3KtXBaDV4ntsQktk=",
  },
  "Success!": {
    val: "성공!",
    translated: "auto",
    h: "6NxF/uD6sOEPkEbPFOHdBKRxj0ZXVbmnPkRXNJDy0zs=",
  },
  "Suggested value": {
    val: "제안된 값",
    translated: "auto",
    h: "k6ScHeFo3C5+aB0s7M5rumKKBu3AJp93St0oUuF2GFw=",
  },
  "Swap NAME and MEMO": {
    /* Label for checkbox that will swap the value for NAME and MEMO when import OFX files */
    val: "NAME과 MEMO를 교환",
    translated: "auto",
    h: "ayF7yBQJox0msQ75+rZt4xxanK31lYhwEoynkOsepjc=",
  },
  "Sync": {
    val: "동기화",
    translated: "auto",
    h: "zJAmFTCwHue7APF8kCb39YCX8J17Tsy3mxyhpQQhge8=",
  },
  "Sync complete": {
    val: "동기화 완료",
    translated: "auto",
    h: "e2VXpLTi1mhVSVqDkExwdM5j8PhfW0MHeOqBwabU4Zo=",
  },
  "Sync has not yet been set up.": {
    val: "동기화가 아직 설정되지 않았습니다.",
    translated: "auto",
    h: "B5XIfqqMdt0gMHz2zsZr9GTj9vSRAS5R2akgGce+fsg=",
  },
  "Synced balance": {
    val: "동기화된 잔액",
    translated: "auto",
    h: "yyCVeQRle/vbcZ1/QyVYtL+ZmyQ5WanHCYKZpJqFd6o=",
  },
  "Syncing...": {
    val: "동기화 중...",
    translated: "auto",
    h: "kuwg7vpvp082IqBtRakekOVu7bqB4PYxhnFVsoBDt/g=",
  },
  "System default": {
    /* Option for Buckets language preference */
    val: "시스템 기본",
    translated: "auto",
    h: "A9haWZjRR5Su694Q278jjqi/xmRweA6I6et1Q9L3ahI=",
  },
  "Target date:": {
    val: "목표 날짜:",
    translated: "auto",
    h: "InmNQoNHlJkDpjvEB+J1XPqDWRqnfNIUwTQ86iNiOGc=",
  },
  "Test Toast": {
    val: "테스트 토스트",
    translated: "auto",
    h: "5SbiliirLaAKLdgRThX+cO2RwGuC87t3Z1O0xT2WsAE=",
  },
  "Theme": {
    /* Label for application theme setting */
    val: "테마",
    translated: "auto",
    h: "iIVgvkFsqSibVEM+h5dM+gyXv0J8Elgp99rvJsOFYqo=",
  },
  "There are unresolved conflicts": {
    val: "해결되지 않은 충돌이 있습니다",
    translated: "auto",
    h: "WGAgJ2b6hUZ5DKTAJ6APu2LzgV5Fzwg0I80+N1TETdQ=",
  },
  "There has been an error.": {
    val: "오류가 발생했습니다.",
    translated: "auto",
    h: "viN5uLRSpgzhvoD9KO9g1cr7ihLQ0Men9LiUpy9RcwE=",
  },
  "There was an error.  Maybe try again?": {
    val: "오류가 발생했습니다. 다시 시도해 보세요?",
    translated: "auto",
    h: "l+W2GSV3tl8Gx19ZW+wOCziBj5/UeMCVO8tvh4P7LEo=",
  },
  "These devices can talk to each other": {
    val: "이 장치들은 서로 통신할 수 있습니다",
    translated: "auto",
    h: "eNTVUVG4RQJPWolU7i1WUrn9Xi4zBpLJ4eQHjG71Kio=",
  },
  "This budget was upgraded for a newer version of Buckets.  Using it with this older version may not work.": {
    val: "이 예산은 Buckets의 최신 버전용으로 업그레이드되었습니다. 이 이전 버전과 함께 사용하면 작동하지 않을 수 있습니다.",
    translated: "auto",
    h: "SJjFg0juSV/ZrJcAQJDMXveLnxwSQT4nfJiyMQFkbMw=",
  },
  "This device's name": {
    val: "이 장치의 이름",
    translated: "auto",
    h: "eTNSTczX466LRmFxprC4rfZhDomB7x4xWYltPshnAB4=",
  },
  "This is a special group for all the buckets without a group.": {
    val: "그룹이 없는 모든 버킷을 위한 특별한 그룹입니다.",
    translated: "auto",
    h: "QP5fEqFwlvHWJyjzrIWUJFlMvhFDxxSsl1vnej/p30I=",
  },
  "This tool will delete data to make it easy to start over with your budget.": {
    val: "이 도구는 데이터를 삭제하여 예산을 다시 시작하기 쉽게 합니다.",
    translated: "auto",
    h: "+40oxGj2jDLNe4ggunYHsgL/9aQz0pw5IeRM5VlYIIU=",
  },
  "This will break all existing bank macros": {
    val: "이것은 모든 기존 은행 매크로를 깨버릴 것입니다",
    translated: "auto",
    h: "VStGFY84kcqELxtAwamD6vI9ELaA4dZnOs2Ubvwnao8=",
  },
  "Thousands separator": {
    val: "천 단위 구분자",
    translated: "auto",
    h: "lYK3D4dxDxbFalJtMHHtc/++mciDmIUg9A3tgDiUkzs=",
  },
  "To": {
    val: "에게",
    translated: "auto",
    h: "syFKIORaeu0FezL85oAbo76XXa8k7bxITMbNowi8ba0=",
  },
  "To use Buckets, you must accept the End User License Agreement (EULA).": {
    val: "Buckets를 사용하려면 최종 사용자 라이선스 계약(EULA)을 수락해야 합니다.",
    translated: "auto",
    h: "0six0i9oNNM/hjCYct1UTEqdgMn0uoBbaBq0cvnoZLM=",
  },
  "Toggle Developer Tools": {
    val: "개발자 도구 토글",
    translated: "auto",
    h: "IYSSUL9ezB58nRuajYVa+zH4ucrmXQOB92zA7sDlrJc=",
  },
  "Toggle Full Screen": {
    val: "전체 화면",
    translated: "auto",
    h: "2ZRq+R5E0Cp4QI+y5jCefU1IOiYvNWLrN/iiJq6hGr8=",
  },
  "Tools": {
    val: "도구",
    translated: "auto",
    h: "mPsch0seV0ZNaU+41My/wS+DkAGfYqzWpPlJpfT1sBs=",
  },
  "Total": {
    val: "총",
    translated: "auto",
    h: "u6dF4hac3zx/3TL4nED+x50jCos7B3IKIqm+WqkIZXk=",
  },
  "Total amount your buckets want each month.": {
    val: "매월 귀하의 버킷이 원하는 총 금액.",
    translated: "auto",
    h: "PdavPuX8D9m/BkLbr04OKhddGvl8+l0iDiqd+5K9sMc=",
  },
  "Transaction": {
    val: "거래",
    translated: "auto",
    h: "G0gRZS6Zq1VoQqtY+L8fY3ogdqSl/OAoTurOZ4L480Q=",
  },
  "Transaction ID": {
    val: "거래 ID",
    translated: "auto",
    h: "5DaWwSVPo8La/gW0/QWRXAHx08KcbBLOe7BrRuMnKMQ=",
  },
  "Transaction Type": {
    val: "거래 유형",
    translated: "auto",
    h: "5OtdraZlT3YBh5NcgKxXigGdmDWur3wzuyeNvRd4mIM=",
  },
  "Transaction(s) deleted": {
    val: "거래(들)가 삭제되었습니다",
    translated: "auto",
    h: "8umpuy0JiIWHWgMJdIJu2si38T6QhOVeI70IUVV/i3U=",
  },
  "Transactions": {
    val: "거래",
    translated: "auto",
    h: "4+yGUer/b71cfxTdeUa5QbonqN9ezC8Eii7KO22Ety0=",
  },
  "Transactions to review": {
    val: "검토할 거래",
    translated: "auto",
    h: "fcauVC7MkwNPXVHbfBl427k53jL2beDDx711UkVI5tg=",
  },
  "Transfer": {
    val: "전송",
    translated: "auto",
    h: "B5GGqjnE8KOjYJjhsFV7zs5TGmGmVPqjihzMVxHJ3sI=",
  },
  "Transferred": {
    val: "이전된",
    translated: "auto",
    h: "dMUnHOi8B6xpQztmwKOsEkjhvkEKLHaefSUJ0oR9ZEs=",
  },
  "Trial Version": {
    val: "체험판",
    translated: "auto",
    h: "GtZIXrHILA84HlpKlxi3BErHwR7WIYkQ/e5BE0Fiaxg=",
  },
  "Trial version": {
    val: "체험판",
    translated: "auto",
    h: "/B8oxaBijS+cHJQBdPRkq7IfcHyPStMT5uGKWUeZQuQ=",
  },
  "Tuition": {
    val: "학비",
    translated: "auto",
    h: "UpDg7j7/mXJnP7WdFJe4hMlLw2XtH7X3Cj669aLHzec=",
  },
  "Type a date format...": {
    val: "날짜 형식을 입력하세요...",
    translated: "auto",
    h: "oOXoncSSYGIZM5rpYEudSx4xWO7x8hRHdt89DNfPv84=",
  },
  "Un-ignore Account": {
    /* Undo/Redo label for no longer ignoring an account from import */
    val: "Un-ignore Account",
    translated: "auto",
    h: "DVgAPa6nwJLDg7emkZZ+j85bGwcKjEzqlkZlPHkypU8=",
  },
  "Un-kick": {
    /* Button label for unarchiving a bucket */
    val: "Un-kick",
    translated: "auto",
    h: "P5Z1ij4jmS06jNOQiHymi+/D+uYJktoalTdw+AHGukM=",
  },
  "Un-kick Bucket": {
    /* Name of action for undo/redo labels (i.e. Control-Z will "Undo Un-kick Bucket") Consider this the opposite of "Archive Bucket" */
    /* Name of action.  Consider this "Unarchive Bucket" */
    val: "Un-kick Bucket",
    translated: "auto",
    h: "7WOQPepkeOH+dwwSbEjomy0amoqY5JtvtlyCSG02c1Q=",
  },
  "Unable to claim access token": {
    val: "액세스 토큰을 얻을 수 없습니다",
    translated: "auto",
    h: "Gao95RuT9JvhdAoZ5winV9os7iMaPIex3Vq9CMSjhzs=",
  },
  "Unable to open the file:": {
    val: "파일을 열 수 없습니다:",
    translated: "auto",
    h: "MxbgnQR4Cyi549ltzzIDDAI1qRGqoeRm0zOApQMS2DY=",
  },
  "Unattended merge not possible": {
    val: "무인 병합이 불가능합니다",
    translated: "auto",
    h: "gj2u4cxLi3C3cxHWoasHcAgEnMNADU6mwZx4EGEZgLU=",
  },
  "Unavailable": {
    val: "사용할 수 없음",
    translated: "auto",
    h: "tML1A7GUQ8Z/SUbUV6zcxmjjrptonGvYtuU1Y2y/gvE=",
  },
  "Uncategorized": {
    val: "미분류",
    translated: "auto",
    h: "BjQg1sHfdAVLyMzfMfC6sQnK4vIGQ6vrl6OsGg8Oqkk=",
  },
  "Uncaught Error": {
    /* Title for error reporting dialog */
    val: "잡지 못한 오류",
    translated: "auto",
    h: "8shOzic2CgRpaIcNhv/44tsVBDgSItWp3ZbdihMYp9E=",
  },
  "Uncleared": {
    /* Label for sum of uncleared transaction amounts */
    val: "미청산",
    translated: "auto",
    h: "1GBgqlG+RCS8dFTG2z15jLFFd4PCVVXDefXwBRq0oTs=",
  },
  "Undo": {
    val: "되돌리기",
    translated: "auto",
    h: "Z1A2vTdYwfdLsWS25iSchnHOHa1VfbQg7u8MDGHk4yo=",
  },
  "Unexpected sync error": {
    val: "예기치 않은 동기화 오류",
    translated: "auto",
    h: "78kYsQMTfGS8BNaZVuqYaRojJlTpcmN6CF9PQKKO0ME=",
  },
  "Unknown account": {
    val: "알 수 없는 계정",
    translated: "auto",
    h: "fe+Wdg63x9QKcxCX3/yM3LDBqelVYK1tng28BgQRovw=",
  },
  "Unknown account deleted": {
    val: "알 수 없는 계정 삭제됨",
    translated: "auto",
    h: "2db3S+9bmJWgpIWRAqHm8irdPTY5ZMEsdHeADQ7HdeQ=",
  },
  "Unknown category": {
    val: "알 수 없는 카테고리",
    translated: "auto",
    h: "bK4teMnFOuofJ4sX76ozAla50yDaLbvb5pCj+New5f4=",
  },
  "Unlinked Accounts": {
    val: "연결되지 않은 계정",
    translated: "auto",
    h: "BPAjsiEkATiwSf9f6kde3yZwSmmyiPDLiZ7Rr+3Zv/A=",
  },
  "Unregistered Version": {
    val: "등록되지 않은 버전",
    translated: "auto",
    h: "x9ekMClqI57T6jREU5VJurBCzlD+hBNJ8pHNQ0zMB1U=",
  },
  "Update": {
    val: "업데이트",
    translated: "auto",
    h: "cQYLRi89RKalUb+A5uCwnJtCV0x+6+otody2dq/mqxk=",
  },
  "Update Account Balance": {
    val: "계정 잔액 업데이트",
    translated: "auto",
    h: "iwKjdHzqHPwoupXiUwrVL1tX4QfO//taXOPXFVtWRVE=",
  },
  "Update Account Name": {
    val: "계정 이름 업데이트",
    translated: "auto",
    h: "xcyLhnHNOTDgJsYGhaelbAmXYam4HWMfD5mQiTiZJ50=",
  },
  "Update Bucket Name": {
    val: "버킷 이름 업데이트",
    translated: "auto",
    h: "Oa+1EZtc4RTtPYyk5LflMMlQq/esZ3qvTgbSLiKIl4E=",
  },
  "Update Bucket Type": {
    val: "버킷 유형 업데이트",
    translated: "auto",
    h: "wt5F9WSIpGlUsGaPnhSJlLYk0qraymNHDw0bYzbHlIE=",
  },
  "Update Color": {
    val: "색상 업데이트",
    translated: "auto",
    h: "6QBa9YrDFsWCiiS/PMj7r+cTmIgMmmqjTnv9x4l90ic=",
  },
  "Update Currency Symbol": {
    val: "통화 기호 업데이트",
    translated: "auto",
    h: "5ni7IpG/zzlc/uAhhkduQ99K/5B9ui5INpaxZw7QTrs=",
  },
  "Update Goal": {
    val: "목표 업데이트",
    translated: "auto",
    h: "S3dt9ahT1yTXTCP2uHqiTMkyPUmAvAHvsCeGNa+NL1E=",
  },
  "Update Group Name": {
    val: "그룹 이름 업데이트",
    translated: "auto",
    h: "/pmHZLX1mkRHtus8eVyojidhAUe6BocaSkf5dGoIrSM=",
  },
  "Update Macro Name": {
    val: "매크로 이름 업데이트",
    translated: "auto",
    h: "61srDLhVLo6bOo+SbnJ0rMbhNhXXRxEjgP3/nFafMKI=",
  },
  "Update Monthly Deposit": {
    val: "월간 예금 업데이트",
    translated: "auto",
    h: "rFQ5lKjSNpQyyptg2Y+a4LQ6jwa1xWjKarMapXiD1/8=",
  },
  "Update Name": {
    val: "이름 업데이트",
    translated: "auto",
    h: "fTqm8NUcvzaYHnGFDmVhLePEd/TFNPhUDzSYIIerjNc=",
  },
  "Update Note": {
    val: "업데이트 노트",
    translated: "auto",
    h: "h4A+jnQW9OrS0wVVoQ9OEJ5I6/h4p7IWrKvN+uSXe4I=",
  },
  "Update Number Format": {
    val: "숫자 형식 업데이트",
    translated: "auto",
    h: "98Qu07eWAHjS80FuHQajrVMMtd0jq5Zq8rRKuDQEZEU=",
  },
  "Update Payee": {
    val: "수취인 업데이트",
    translated: "auto",
    h: "28JOAeb8QLlBYMLiOO8RGW8SHBJ14Gdp/t/7rprHodk=",
  },
  "Update Payees": {
    val: "수취인 업데이트",
    translated: "auto",
    h: "hJhDyJDaai8R9NXK8J3AOdqOOhdqmkZeR8ziJyzuzVU=",
  },
  "Update Target Date": {
    val: "타겟 날짜 업데이트",
    translated: "auto",
    h: "SEac1rQopyHALPSWU85qYV3GE0x9i2OGDB+JYnVID8A=",
  },
  "Update Transaction": {
    val: "거래 업데이트",
    translated: "auto",
    h: "aMF18BJOMjuVOInpbGKf/3jyTE1qYzq4oHzb3sBVcWw=",
  },
  "Update account balance": {
    val: "계정 잔액 업데이트",
    translated: "auto",
    h: "GQWvUamqQOyoaXm16AiGtHme6kW171erNK5pa4vgDIE=",
  },
  "Update balance": {
    val: "잔액 업데이트",
    translated: "auto",
    h: "XSg0Q5Q7j+G+HNjn3YJOakbNLSjTNcem3BFbw6fTDI8=",
  },
  "Update complete": {
    val: "업데이트 완료",
    translated: "auto",
    h: "5JP6upRWYG0d3p+rGNvUMcl08i6wvxKs0zhYG5NvUj4=",
  },
  "Update downloaded.": {
    val: "업데이트가 다운로드되었습니다.",
    translated: "auto",
    h: "DO2vE3TgW3xjiD8ZaOWeScL3qWCyiFPK8GENQ9NosYw=",
  },
  "Update failed": {
    val: "업데이트 실패",
    translated: "auto",
    h: "MU8WQkSmMfpUADhweg+WSBrhrTcWK23Ow4QqwxyoAfo=",
  },
  "Update opening balance": {
    val: "개시 잔액 업데이트",
    translated: "auto",
    h: "Z0BMQUVy9IHw3rAN6dd3xnGsgHNFC+l4FxxGcNc8QJ8=",
  },
  "Updated": {
    val: "업데이트됨",
    translated: "auto",
    h: "zN8HYtieJpXIt5Bdb1SWdC1+tonH7H3QHVbuUzU4rgY=",
  },
  "Updates": {
    /* Label for section about Buckets application updates */
    val: "업데이트",
    translated: "auto",
    h: "lAv/Y2isYNmD0UIkVd8zZO2kJ9FjxPjiL+Bnajfzxtg=",
  },
  "Updating...": {
    val: "업데이트 중...",
    translated: "auto",
    h: "gAFg4pzFnJ37C/ReDfO2llXdsckG7onQiLq6WjhBWxk=",
  },
  "Used in future": {
    val: "향후 사용",
    translated: "auto",
    h: "O0zGsqv23d44/pWJqCSt+qkDtG/nBrBI2W0aRA9XoDw=",
  },
  "Username": {
    val: "사용자 이름",
    translated: "auto",
    h: "UAZmOHuQGOos8K4CBGseGzsnoOEV6JPA/VJYYtHu0k8=",
  },
  "Username/Password": {
    val: "사용자 이름/비밀번호",
    translated: "auto",
    h: "2pr0zsSsuFii6F31xH62795E7bFmbKwAYd/oe2E1kBc=",
  },
  "Using this tool can ruin your budget file.  Make a copy of your budget if you're worried.": {
    val: "이 도구를 사용하면 예산 파일이 손상될 수 있습니다. 걱정된다면 예산의 사본을 만드세요.",
    translated: "auto",
    h: "TCvA81ztNxeLhpVdiYrF4RLEGEp5FO3YWCgfOyjnjFc=",
  },
  "Vacation ": {
    val: "휴가 ",
    translated: "auto",
    h: "Buf8KjuQKnfaA4c2qPDVm8FQgYWJUfiCYYkPAnsIIBw=",
  },
  "View": {
    val: "보기",
    translated: "auto",
    h: "paIseOhKCT2+NaUBPKk98vQB/lphf7jIGeERV77doDg=",
  },
  "View EULA": {
    val: "EULA 보기",
    translated: "auto",
    h: "6symBeYWMFH1ySjpbWX+XjygI3Cq3j/ywz3b0tPtIHE=",
  },
  "Waiting to retry": {
    val: "재시도 대기 중",
    translated: "auto",
    h: "F88F80XANbwofOEoXYAjMA09+UIhKPUY6qNK7dkEQmo=",
  },
  "Want": {
    val: "원함",
    translated: "auto",
    h: "lV/eDqkplJ/XKjHyCSE47yOWOl3t3Igj9S559wDKMZI=",
  },
  "Wants": {
    val: "원한다",
    translated: "auto",
    h: "AOckwUko9CT2K8gxtu/GHFhjivPPgTDgQSjCNSujUV4=",
  },
  "Warning: Doing this will use rain you don't have and could steal rain from future months (if available).": {
    val: "경고: 이 작업을 수행하면 보유하지 않은 비를 사용하게 되며, 미래의 달에서 비를 빼앗을 수 있습니다 (가능한 경우).",
    translated: "auto",
    h: "YR+S0SMnFz4+K5vpXrMzMfSaBE5mHBrhQTalzgI0/7U=",
  },
  "Water": {
    val: "물",
    translated: "auto",
    h: "BOL+IhrDsm6ooEqGpFPieQoyXrWpV6LvKh0DvkAJ2bw=",
  },
  "Web YNAB Export": {
    /* Label for YNAB export file type */
    val: "웹 YNAB 내보내기",
    translated: "auto",
    h: "tW4h/MIfunRbmUN+oxQ8Sa2pKJQgML5XIcQkPzclpEM=",
  },
  "When \"On\" this macro will be run during a normal sync.": {
    val: "\"켜짐\"으로 설정하면 이 매크로는 일반 동기화 중에 실행됩니다.",
    translated: true,
    h: "HnJ7qVSPXxIg3/lygw1Ln/VvBMBs8roJwXlCpP2KnMw=",
  },
  "Window": {
    val: "창",
    translated: "auto",
    h: "qjw17TPhgeX5msjicdTljyCEeBLFbQvz/oyOunMLJnQ=",
  },
  "YES": {
    val: "예",
    translated: "auto",
    h: "z2FPqj4x8eJnnL7/njedU5qqPbxgrFqjpsTeqGqJH9U=",
  },
  "Year to Year": {
    val: "연도 대 연도",
    translated: "auto",
    h: "YBGCdB/QACmMM/QS2qMrGlC8qtfWz9bhue7sgDaIRHg=",
  },
  "Year's Supply": {
    val: "1년 공급",
    translated: "auto",
    h: "E5VfnhjiYed/e2Ezg+RdChSIz6cjwl9oyRzpO1rjl0I=",
  },
  "Yearly": {
    val: "연간",
    translated: "auto",
    h: "LjMZRIZX3jdNUpbBBgqpPR9Az6c4sBWYUwd2WDVb9Rw=",
  },
  "Years": {
    val: "년",
    translated: "auto",
    h: "9bCZk+mcGxconx1JMhBZKdnRo4id89h4UiucsvMRAng=",
  },
  "Yes": {
    val: "예",
    translated: "auto",
    h: "GE/aXJgLnZyzdfQqUogXxiNfvU95d1qAGPrlr8vfKmM=",
  },
  "Yes, connect": {
    val: "네, 연결",
    translated: "auto",
    h: "nQoLGB1tRewici5GtXIrzivf6Eqzjlms2YBdnfRbFFc=",
  },
  "You are running the latest version!": {
    val: "최신 버전을 실행 중입니다!",
    translated: "auto",
    h: "hShy87A6GAhRqqtK+8VdVeGD70zA64iiV0/SwectQ0I=",
  },
  "You can do math in all number inputs, not just here in the calculator.": {
    val: "모든 숫자 입력란에서 수학 계산을 할 수 있습니다. 여기 계산기에서만이 아닙니다.",
    translated: "auto",
    h: "dn2W/ktTrcwSzYNSq6IQL7Sl2k8lxZQRsFehzG9Mf7g=",
  },
  "You don't have any recurring expense buckets yet.": {
    val: "아직 반복 지출 버킷이 없습니다.",
    translated: "auto",
    h: "nq2IDCqs8m0MQJ5lO2TU1cnlj9nP1vwIMWMqi0WGOjk=",
  },
  "You have no closed accounts.": {
    val: "폐쇄된 계정이 없습니다.",
    translated: "auto",
    h: "8BZG+UdW1Rrd/+2zFNv7SskiNpD6DtlNa8LwQulqX5s=",
  },
  "You haven't kicked the bucket yet...": {
    val: "당신은 아직 죽지 않았어...",
    translated: "auto",
    h: "mtaAsLJ7BgWZcbIkRmZ4ZPSSRGXj6vJ2H8+diLhIba4=",
  },
  "You must backup to a different file.": {
    val: "다른 파일에 백업해야 합니다.",
    translated: "auto",
    h: "LAt5pxdaPsRHDU6bS2Cu1aEDIQ2oZAMw46Pa7H6pc5o=",
  },
  "Your email address:": {
    val: "귀하의 이메일 주소:",
    translated: "auto",
    h: "/ip+dZCEKXdLQFW5CAt/fB8OBf/rD+67pz8etOXlJXc=",
  },
  "Zoom": {
    val: "줌",
    translated: "auto",
    h: "Zjzswxbrkbj1TLPOYCtimoyh/aJlkF/mxeghbzdheSs=",
  },
  "Zoom In": {
    val: "확대",
    translated: "auto",
    h: "p3yHl1qkGVfRDPsLKitBuZhRJIDaTy3fV/vbWqOzo24=",
  },
  "Zoom Out": {
    val: "축소",
    translated: "auto",
    h: "hRo1uzcSNStVll7ef2xHOB6PqFh+q7Sg/VHiGcK4M8M=",
  },
  "account-in": {
    /* Label for amount put into an account */
    val: "In",
    translated: "auto",
    h: "TcCPpYF7/U7vM5pPmpqvJipZt0WPk3A/vC7Ec8pfDvo=",
  },
  "account-net-amount": {
    /* Label for net value of amount in - amount out for an account */
    val: "순",
    translated: "auto",
    h: "QITdwYnhK1fVfALCDc6jQhY2jLIUBpPp0/bSHOX6p9M=",
  },
  "account-out": {
    /* Label for amount taken out of an account */
    val: "출금",
    translated: "auto",
    h: "v4Oj0CQx7cmHP4mcJsZX4xMTzMzeFS81XA9gU3qOFKU=",
  },
  "account-type": {
    val: "유형",
    translated: "auto",
    h: "xE96uLvSSFjRvRq5lfIcX1LGpnGQeyntOksJQ0X3CyE=",
  },
  "account.balance": {
    /* Account balance label */
    val: "잔액",
    translated: "auto",
    h: "azvDWgVPY349dq4q8mbtpDhehRsFKYKNzMk/TcuOvEQ=",
  },
  "account.closed": {
    /* Account closed label */
    val: "폐쇄",
    translated: "auto",
    h: "8pZrnvzAUQTJhDN/XX31DLvx0wIs1Ww3fV6pktEKEHs=",
  },
  "account.currency": {
    /* Account currency label */
    val: "통화",
    translated: "auto",
    h: "3D60KXXRwf14ydWSrd5tvgLQBOCOfNDf05UchJALh14=",
  },
  "account.import_balance": {
    /* Account imported balance label */
    val: "가져온 잔액",
    translated: "auto",
    h: "Z2Hg44o19bCItKOAhixAAwpW972mvt3LZyFy7Y3Dhgk=",
  },
  "account.kind": {
    /* Account type label */
    val: "유형",
    translated: "auto",
    h: "xE96uLvSSFjRvRq5lfIcX1LGpnGQeyntOksJQ0X3CyE=",
  },
  "account.name": {
    /* Account name label */
    val: "이름",
    translated: "auto",
    h: "bMXfNfAzjiMOnmM+rZmR8I9iyrRaMmSXja7cZ0eGcwU=",
  },
  "account.offbudget": {
    /* Deprecated label for off budget accounts */
    val: "예산 외",
    translated: "auto",
    h: "cw3ZD6kn6Mat0qZqOZP0Is9hg7xmOxrKqKCD8CIjmz4=",
  },
  "account.ranking": {
    /* Account order label */
    val: "주문",
    translated: "auto",
    h: "Ggkvvwng4JyzP26RBZ9LrevWhrb766Qq+yTffZWmefg=",
  },
  "account.starting_balance": {
    /* Account opening balance label */
    val: "개시 잔액",
    translated: "auto",
    h: "OEuQ3gAWrV+lPay2usXLKN3bNCH87PEsrcr+thNNbJY=",
  },
  "account_mapping.account_hash": {
    /* Account cryptographic hash label */
    val: "Fingerprint",
    translated: "auto",
    h: "knLiHOJx3KZ0xE/Ex3QjyueLNEC/iAp6T3RHzZ3RayA=",
  },
  "account_transaction.cleared": {
    /* Transaction cleared flag label */
    val: "Cleared",
    translated: "auto",
    h: "j1SmbPuDDBP04XfOH9NNFCDzXmB9xAzSoVG7RcHcdBg=",
  },
  "account_transaction.fi_id": {
    /* Financial institution assigned transaction ID label */
    val: "Institution-assigned ID",
    translated: "auto",
    h: "gFeirPPl/djXfLKwDK8FtD7JPKjC/2e7sHuRIxqkii8=",
  },
  "account_transaction.general_cat": {
    /* General category label */
    val: "일반 카테고리",
    translated: "auto",
    h: "xEay6AzOg30Omh/FS2qPVa7eCkrUiXxTIclZM+h3BZE=",
  },
  "accounts.name_placeholder": {
    val: "이름 없음",
    translated: "auto",
    h: "UwMHboI9q49SZQkwMN8ps9zBi6YOSdtwakjLJwudtyA=",
  },
  "action.New bucket": {
    val: "새 버킷",
    translated: "auto",
    h: "aIKjDQtVbUMjIHU/6fccfiWBUIwUBnAofdzRJTCuytI=",
  },
  "action.New group": {
    val: "새 그룹",
    translated: "auto",
    h: "054RU7JImk6Pavh27xHA9CgGIgjmP0dYIgXez2UWx34=",
  },
  "action.ignore": {
    val: "무시",
    translated: "auto",
    h: "K8sAh2XND1/tJOuX9xTLmr1fQjUOB70cfc9GwI62fEs=",
  },
  "action.link-account": {
    val: "링크",
    translated: "auto",
    h: "unfAYQpjuyuTjjRCodr+S+jNjRmz3nahjZ91u/j5HfE=",
  },
  "action.report bug": {
    val: "버그 신고",
    translated: "auto",
    h: "RxuE9Dh0Dadda2PtjUPD0dQ7b8aQok84Ytvw31ABBRU=",
  },
  "bank_macro.enabled": {
    /* Bank macro enabled flag label */
    val: "활성화",
    translated: "auto",
    h: "hHztbKAreElTc7ttNUovJFG0DIq9xfILBM+1aNV8x2Q=",
  },
  "bank_macro.enc_recording": {
    /* Bank macro recording data label */
    val: "데이터 기록",
    translated: "auto",
    h: "nCMGHm2pOXvkN7v4hXGbN6g6Q9KfnHLC9ToPAUPTNIo=",
  },
  "bank_macro.name": {
    /* Bank macro name label */
    val: "이름",
    translated: "auto",
    h: "bMXfNfAzjiMOnmM+rZmR8I9iyrRaMmSXja7cZ0eGcwU=",
  },
  "bank_macro.uuid": {
    /* Bank macro UUID label */
    val: "UUID",
    translated: "auto",
    h: "UbH2EWDbIyGX6gVQAsz9xGUQYrsX+er1VM8Fuuxhxrw=",
  },
  "bucket.balance": {
    /* Bucket balance label */
    val: "잔액",
    translated: "auto",
    h: "azvDWgVPY349dq4q8mbtpDhehRsFKYKNzMk/TcuOvEQ=",
  },
  "bucket.color": {
    /* Bucket color label */
    val: "색상",
    translated: "auto",
    h: "/hiVjO3WJ9JPhG5BDY2SqUELJlWFlhAWkhD3x/c45mU=",
  },
  "bucket.debt_account_id": {
    /* Bucket's related debt account label */
    val: "부채 계정",
    translated: "auto",
    h: "VSXRVQC8DbjhKcJjXLieRBksQgQU56PH2njj+P5m/KI=",
  },
  "bucket.deposit": {
    /* Bucket deposit amount label */
    val: "입금",
    translated: "auto",
    h: "m1MGQLRYdNxU9nxvjA8qOlurdztaw7NQI15XBoTWhN8=",
  },
  "bucket.detailslabel": {
    val: "상세",
    translated: "auto",
    h: "68e/QPEuI36iIEcTWmKDrVU9KBReQ3EjFzF1F06KQMA=",
  },
  "bucket.end_date": {
    /* Bucket goal target date label */
    val: "목표 날짜",
    translated: "auto",
    h: "4+CFBiJaLAXPQeIpTMtcn3dB7Kgzsb0U/1WlSaqWgwM=",
  },
  "bucket.goal": {
    /* Bucket goal amount label */
    val: "목표",
    translated: "auto",
    h: "IGWRYx9sqJO1YtI2GyVqdV+i4fFQ+e8XMaiWTNAn/xk=",
  },
  "bucket.group_id": {
    /* Bucket group label */
    val: "그룹",
    translated: "auto",
    h: "sOfjtH37WgstIWC3rRx2AsnvrT3fsQLKx5n8lTeYI0Y=",
  },
  "bucket.kicked": {
    /* Bucket kicked flag label */
    val: "Kicked",
    translated: "auto",
    h: "cWApfoLlcBvoHizIFtrDQq3uwrZIYMXKO1iLMvv8szI=",
  },
  "bucket.kind": {
    /* Bucket type label */
    val: "유형",
    translated: "auto",
    h: "xE96uLvSSFjRvRq5lfIcX1LGpnGQeyntOksJQ0X3CyE=",
  },
  "bucket.name": {
    /* Bucket name label */
    val: "이름",
    translated: "auto",
    h: "bMXfNfAzjiMOnmM+rZmR8I9iyrRaMmSXja7cZ0eGcwU=",
  },
  "bucket.ranking": {
    /* Bucket order label */
    val: "순서",
    translated: "auto",
    h: "Ggkvvwng4JyzP26RBZ9LrevWhrb766Qq+yTffZWmefg=",
  },
  "bucket.transfer.help": {
    val: "이체는 하나의 버킷에서 다른 버킷으로의 거래입니다. 거래가 수입이나 지출이 아닌 경우, 그것은 아마도 이체일 것입니다.",
    translated: "auto",
    h: "dh5nslkaB1wNR4tJ5zAn6Hms+9oJqBDmAIR5k6WE6iY=",
  },
  "bucket_group.name": {
    /* Bucket group name label */
    val: "이름",
    translated: "auto",
    h: "bMXfNfAzjiMOnmM+rZmR8I9iyrRaMmSXja7cZ0eGcwU=",
  },
  "bucket_group.ranking": {
    /* Bucket group ordering label */
    val: "순서",
    translated: "auto",
    h: "Ggkvvwng4JyzP26RBZ9LrevWhrb766Qq+yTffZWmefg=",
  },
  "bucket_transaction.account_trans_id": {
    /* Bucket transaction's related account transactions ID label */
    val: "계좌 거래",
    translated: "auto",
    h: "LyTdIJwB7IZ3hRIJLfTzbNqAiCegb1SR/QSm722WZkc=",
  },
  "bucket_transaction.bucket_id": {
    /* Bucket transaction bucket label */
    val: "버킷",
    translated: "auto",
    h: "APPSgbsmF5H9B7YIJDaPcEVh4T7ctWU+hxQv/eG1Dg0=",
  },
  "bucket_transaction.linked_trans_id": {
    /* Label for a debt account's transaction that caused this transaction */
    val: "부채 거래",
    translated: "auto",
    h: "dsZm4Y+ZMohJRUkDmRya3MF/TZcL+z8GokDuT1P2da0=",
  },
  "bucket_transaction.transfer": {
    /* Transfer flag label */
    val: "전송",
    translated: "auto",
    h: "B5GGqjnE8KOjYJjhsFV7zs5TGmGmVPqjihzMVxHJ3sI=",
  },
  "buckethead.activity": {
    val: "수입과 지출의 순 총액.",
    translated: "auto",
    h: "Ci5S7xYAKzBYmbK2mxnSj4p0EV9hMsvSs11lDMecqFo=",
  },
  "buckethead.fill": {
    val: "투입 및 인출의 순 총액 (거래와 무관).",
    translated: "auto",
    h: "T/g+6epzxej0HqIZyFjCZzqwtqqEJPCRV2cntaNNfOE=",
  },
  "bucketinout.help": {
    val: "이것을 사용하여 각 버킷에 돈을 넣고 빼세요.",
    translated: "auto",
    h: "FVxtuv3HRHdU7Snx+P3YYxcSngOkrcKyS5mng6AB8gE=",
  },
  "bucketrain.help": {
    val: "이 버킷들이 매월 원하는 금액입니다. 작은 상자가 그들이 받은 금액을 나타냅니다.",
    translated: "auto",
    h: "3dbOFkUiGaEoD01CP7kIWDQHgUbULWexjdEKdEAF3sA=",
  },
  "buckettype.deposit": {
    val: "정기 지출",
    translated: "auto",
    h: "3HXotB9ZHFm14ArdM0RfCT0merw8+KuXthbzotnPRec=",
  },
  "buckettype.deposit-date": {
    val: "Y 날짜까지 Z/월 저축",
    translated: "auto",
    h: "zdWdEX9eN5qpFDboBF+wi9EIguwYsB9nQCzN9GjrxMc=",
  },
  "buckettype.goal-date": {
    val: "X를 Y 날짜까지 저장",
    translated: "auto",
    h: "+boZHIer4ggkvJ8A5cSl1EVyWRwKigC9UkBFn4WSEdg=",
  },
  "buckettype.goal-deposit": {
    val: "X를 매월 Z를 예치하여 절약하세요",
    translated: "auto",
    h: "BUzPSZsbi+lN/3tb6eF63oa7CEzS94r6ee5jf5G7inA=",
  },
  "buckettype.plain": {
    val: "평범한 오래된 양동이",
    translated: "auto",
    h: "AqvTaZK8lidyI8PZ9JXBBQABazz8uxM+uQM6iEuyO6w=",
  },
  "budget-file-type-name": {
    val: "버킷 예산",
    translated: "auto",
    h: "g2jeytcuhPOlEo6R2OlTzT3vNdE7sVWGnXuffEioq4c=",
  },
  "change_log.action": {
    /* Change log action type */
    val: "작업",
    translated: "auto",
    h: "XvzB5DfL6tpSZT8TMSHzyiWbhLdKUeFcJ3tN6T8RvXU=",
  },
  "change_log.obj": {
    /* Change log object name label */
    val: "객체",
    translated: "auto",
    h: "x6OaEMmJvznVG69QSR5ZH9Xoyu3vlgNaQC6E/ymQjgQ=",
  },
  "change_log.obj_id": {
    /* Change log object id label */
    val: "객체 ID",
    translated: "auto",
    h: "K80xtzHhh4SO59NC0gT7rx1scigZGMneXw1DA+Ycv48=",
  },
  "daterange.all": {
    val: "전체 기간",
    translated: "auto",
    h: "Fz1lBhxlewLJ5bSKTiIzzaW3CAtAPxkUWWKU0BVqgAA=",
  },
  "debt-bucket-explanation": {
    val: "이것은 특별한 부채 상환 버킷입니다.",
    translated: "auto",
    h: "+XZJ0Nl0JR5/xu1lf1csGge9E19plZmcKQmuaBg44aI=",
  },
  "debt-payment-bucket-name": {
    /* A likely account name might be "Credit Card" or "Chase VISA".  This is the name of the bucket that holds the payment for the debt account. */
    val: (account_name:string) => `${account_name} 결제`,
    translated: "auto",
    h: "QvSzok8BqSPb+A0q+87lqp62Rk+JFQhIno38JQyUfYg=",
  },
  "default account name": {
    val: "저축",
    translated: "auto",
    h: "zCYN8vtLT3Hhb9CbDDSL2xOOjqhzmmhMa5yWDTR7bCE=",
  },
  "default new bucket name": {
    val: "새 버킷",
    translated: "auto",
    h: "FchHrB6weykpHiqRVxc5QKb6BEdhH4DXrc+t6RNcF8M=",
  },
  "default new group name": {
    val: "새 그룹",
    translated: "auto",
    h: "1dmXA/VlW+tjhojOGcypAy70L2wupHf9EdVjUByvpmA=",
  },
  "err": {
    val: "에러",
    translated: "auto",
    h: "SjZnjAmjB+MXTE65uld0YUG2SmqBsMTAaeG4UnJgm4s=",
  },
  "error-detail": {
    val: "이 오류가 계속 발생하거나 이해가 안 된다면, 버그를 보고하거나 우리에게 채팅하세요.",
    translated: "auto",
    h: "10Kk29tlHpBnhcTf7RRMfq1OZPGZgvPPguRlInaLNoY=",
  },
  "file_import_mapping.mapping_json": {
    /* File import mapping data label */
    val: "데이터",
    translated: "auto",
    h: "nb/gDaJJpEyxUczsooYPcWRNvDVzBJLOxevxBEAPM+o=",
  },
  "getting-started-link": {
    val: (clickhandler) => {
          return <span>버킷을 처음 사용하시나요? 확인해 보세요. <a href="#" onClick={clickhandler}>시작 가이드 비디오.</a></span>
        },
    translated: "auto",
    h: "9NGQRvIxlAaOF9i+zWPXMFQubcY+5jtA7Td/lii16aM=",
  },
  "go-to-next-month": {
    /* Menu label for "Go To... Next Month" */
    val: "다음 달",
    translated: "auto",
    h: "O3OOxop0NEwRr9eDaqAU+8KU9Pw0GeVnYLo0Abdkotw=",
  },
  "go-to-next-year": {
    /* Menu label for "Go To... Next Year" */
    val: "내년",
    translated: "auto",
    h: "NfnsOERP+IaYQvH6i+9MJ6KRpbYSapnXXUFm60jUbqo=",
  },
  "go-to-prev-month": {
    /* Menu label for "Go To... Previous Month" */
    val: "이전 달",
    translated: "auto",
    h: "aCvOorN0f6iWVHoOoBvWYttjgiPF/x5zZvXX3IqFI6g=",
  },
  "go-to-prev-year": {
    /* Menu label for "Go To... Previous Year" */
    val: "이전 연도",
    translated: "auto",
    h: "ZntiItsGCJfJBxKIXyzi3+NpS8jZXYAK8IXrOl9bfFg=",
  },
  "go-to-this-month": {
    /* Menu item for "Go To... This Month" */
    val: "This Month",
    translated: "auto",
    h: "pjcOO9o+UFMLsp6ovyVzksVtCLcFsauwEITWoeq//bg=",
  },
  "import-verb": {
    val: "수입",
    translated: "auto",
    h: "F3sijvfYz3oB4iz2rVHjUvNDLQs43MbXDVIr5VFA2/c=",
  },
  "in the bank": {
    val: "은행에서",
    translated: "auto",
    h: "7gl7ZdgJ3HfhOcQMiU7hVkFpXIR3KFxXtlMhKyE/Irw=",
  },
  "misc group name": {
    val: "기타",
    translated: "auto",
    h: "DPoc7CIbzLHJxuar3WnaidO3Ryy1QtYkCswRzVHtVBg=",
  },
  "money-balance-as-of": {
    val: (amount:JSX.Element, date:JSX.Element) => {
                  return <span>{amount} 기준 {date}</span>
                },
    translated: "auto",
    h: "99X4HuXB5SeCrTqn5LuD/S4a6GjUCB6gV1Z1gAZPfKM=",
  },
  "months gain/loss label": {
    val: (gain) => {
                        return gain >= 0 ? "월의 이익" : "월의 손실";
                      },
    translated: "auto",
    h: "lGcEnJfZJau2h5ohbKNxY1FjL0vJoW3oJOJQwSCt+Kg=",
  },
  "more": {
    val: "더",
    translated: "auto",
    h: "uiqCMjSdL1TgDZHPNYXLnfN/yZq59+kDR/wKZSAP0hU=",
  },
  "nag-message": {
    val: () => `이것은 등록되지 않은 평가판 버전입니다. 평가판은 시간 제한이 없지만, 계속 사용하려면 라이선스를 구매해야 합니다.

지금 라이선스를 구매하시겠습니까?`,
    translated: "auto",
    h: "cugeP6FVXqdiCtOers5rslG0mDD5t/Rfl1ZWslfhD48=",
  },
  "navigatestep": {
    val: (url) => `으로 가기 ${url}`,
    translated: "auto",
    h: "nI/J4GfYlL6BgRZRSiPFfA5o7ASdx2VVYW6x3vgCuKE=",
  },
  "net-transfers.help": {
    val: "순 이체는 이체로 표시된 모든 거래의 합계입니다. 0이어야 합니다. 그렇지 않으면, 중복 거래나 이체로 잘못 분류된 거래가 없는지 확인하기 위해 클릭하세요.",
    translated: "auto",
    h: "2P3jr/VPQ35tlPa/uDMqi1spXO4Rinn76fgfVOegiA8=",
  },
  "no name": {
    val: "이름 없음",
    translated: "auto",
    h: "UwMHboI9q49SZQkwMN8ps9zBi6YOSdtwakjLJwudtyA=",
  },
  "noin.income": {
    val: "수입",
    translated: "auto",
    h: "D2fJbta5d1Z5QYuRC5zzkBHsItZOOgY4FKrFJ64BvRs=",
  },
  "notify-downloaded-file": {
    val: filename => `다운로드된 파일: ${filename}`,
    translated: "auto",
    h: "HwxJ2TVx57Qef6bXYySekL/eoBzvIEFUqBxQdxgcyCs=",
  },
  "noun.debt": {
    val: "부채",
    translated: "auto",
    h: "y9kslXhW17gMMFZ9Dq8g/tabfINzlmzT+39QNbWiWGA=",
  },
  "noun.transfer": {
    val: "전송",
    translated: "auto",
    h: "B5GGqjnE8KOjYJjhsFV7zs5TGmGmVPqjihzMVxHJ3sI=",
  },
  "off": {
    val: "끄기",
    translated: "auto",
    h: "nzvsum5LFYOz4ZRB3eTVliJTfZvVSpTSImJ4XkhThNA=",
  },
  "on": {
    val: "켜짐",
    translated: "auto",
    h: "mQwjhouWWBSxF8+abE3+RUUurcIXHh+YGGXr/ITxByQ=",
  },
  "press Escape to close": {
    val: "Escape 키를 눌러 닫기",
    translated: "auto",
    h: "5jKKS3xwogwcB2YptY5sW2/MQ/ikfMbR99l8ViHxmAA=",
  },
  "rain.help.neg": {
    val: (abs_amount:JSX.Element) => {
                                      return <span>
                                      귀하가 {abs_amount}을 버킷에 너무 많이 넣었습니다.  이번 달에 모든 거래가 분류되었으면, 원하는 버킷에서 {abs_amount}을 제거하세요.
                                      </span>
                                    },
    translated: "auto",
    h: "tqXmJxZXqyA0mN/8ugZkpCyspyO7XlPnGlEYGWgQ7jk=",
  },
  "rain.help.pos": {
    val: (abs_amount:JSX.Element) => {
                                      return <span>
                                      버킷에 넣을 {abs_amount}이 남았습니다.
                                      </span>
                                    },
    translated: "auto",
    h: "boezbSGkVm3dnfFvodJOAeCgAEMIQN9L+8TwEHLpU/o=",
  },
  "sample-size": {
    val: (count:number, total:number) => { return `총 ${total} 중 ${count}개 표시` },
    translated: "auto",
    h: "V4+Zyz6U1+wyTBVSVOfOz+wwkd1EWbQBhFcYdL9jLfY=",
  },
  "settings.key": {
    /* Settings name label */
    val: "이름",
    translated: "auto",
    h: "bMXfNfAzjiMOnmM+rZmR8I9iyrRaMmSXja7cZ0eGcwU=",
  },
  "settings.value": {
    /* Settings value label */
    val: "값",
    translated: "auto",
    h: "+VG3lKNZdlCrMfK2d7yG7/OtZ5iGD3yqkIqOIClVuNw=",
  },
  "simplefin-connect-intro": {
    val: "연결하려면 다음을 수행하세요:",
    translated: "auto",
    h: "421gz/BziKZhsIy2YKRFNtwoqPcbQ7uhFZWWfd6ReBg=",
  },
  "simplefin-get-token": {
    val: (mklink) => {
              return <span>Get a SimpleFIN Token from the {mklink('SimpleFIN 브리지')}</span>
            },
    translated: "auto",
    h: "VEeKjngcHxowWbB2xWy5oNH4MXIfJQ7EqpiomT6V0fg=",
  },
  "simplefin-paste": {
    val: "그런 다음 여기에 SimpleFIN 토큰을 붙여넣으세요:",
    translated: "auto",
    h: "vAoRsY20OBqs8bleaXD3auq8VnO9gQj7gXz5p+p71EI=",
  },
  "simplefin_connection.access_token": {
    /* SimpleFIN access token label */
    val: "토큰",
    translated: "auto",
    h: "RqJX7GMSAvHvTe36qzKsJI8E56vSQX8DYTUB/G7/RTI=",
  },
  "single-account Closed": {
    val: "닫음",
    translated: "auto",
    h: "8pZrnvzAUQTJhDN/XX31DLvx0wIs1Ww3fV6pktEKEHs=",
  },
  "single-bucket Kicked": {
    val: "킥",
    translated: "auto",
    h: "cWApfoLlcBvoHizIFtrDQq3uwrZIYMXKO1iLMvv8szI=",
  },
  "some day...": {
    val: "어느 날...",
    translated: "auto",
    h: "4K+3SY48UwcktULX4xiGt6J8Q8Hys3JjUR3t62WI6mo=",
  },
  "sync-symbol help": {
    val: "이 기호는 거래가 수입/동기화에서 왔음을 의미합니다.",
    translated: "auto",
    h: "S3tDRls+AJYj6f8jSNSCa1FVyNY+ngn6Db1EQJ3dpLE=",
  },
  "sync.toast.syncing": {
    val: (start: string, end: string) => {
        return `거래를 ${start}부터 ${end}까지 동기화 중`;
      },
    translated: "auto",
    h: "utj3wVCxisKfYRDtJ+t5B8jPlLKwhght2S5Cb3b0qZc=",
  },
  "tab": {
    /* Label for 'tab' character */
    val: "탭",
    translated: "auto",
    h: "aEXPpTPGGl6vpoXplsnqN9LGRDys7bKMPu0BVvzbxIg=",
  },
  "this_device.name": {
    val: "이름 없음",
    translated: "auto",
    h: "Z85JCnN1GdDw+yMwZqwW8aeKgQkvCHCkVIkIjZt7G00=",
  },
  "toast.updated-trans": {
    val: count => `업데이트/생성된 ${count} 거래`,
    translated: "auto",
    h: "bBKDE3rQIV5P80cYEL6mkLmIvgxjzVHCIf3aFa+KtmU=",
  },
  "trans-created-outofview": {
    val: (month: string) => {
              return <span>거래가 {month}에 생성되었습니다 </span>;
            },
    translated: "auto",
    h: "ur97iCX3Iw1E262eZ72YAEFdXlwvlqNkyNn1caIKi0E=",
  },
  "transfer-from-account": {
    val: (dropdown:JSX.Element) => {
                return <span>전송 원본 {dropdown}</span>
              },
    translated: "auto",
    h: "VJmIMDZGOdMKwBpoqDUYiVdCFhw1pJ4qCmKiszAECL4=",
  },
  "transfer-to-account": {
    val: (dropdown:JSX.Element) => {
                return <span>이전하기 {dropdown}</span>
              },
    translated: "auto",
    h: "Bd1IGkjXo2ruWofGrT+WwLdiy8IwJ/PW+7SO4TaDcps=",
  },
  "unknown_account.account_hash": {
    /* Account fingerprint label */
    val: "Fingerprint",
    translated: "auto",
    h: "knLiHOJx3KZ0xE/Ex3QjyueLNEC/iAp6T3RHzZ3RayA=",
  },
  "unknown_account.description": {
    /* Unknown account description label */
    val: "설명",
    translated: "auto",
    h: "bg0ZDIR+z+PEkinc/ZyqkERMsVZcFFm3NhQoIqZH+WM=",
  },
  "unknown_account.ignore": {
    /* Label for flag indicating if an unknown account is ignored or not */
    val: "무시",
    translated: "auto",
    h: "K8sAh2XND1/tJOuX9xTLmr1fQjUOB70cfc9GwI62fEs=",
  },
  "use-delimiter": {
    /* When importing CSV files, users can choose a custom delimiter (instead of commas). This presents their custom delimiter as an option. */
    val: (delimiter:string) => `사용 "${delimiter}"`,
    translated: "auto",
    h: "KJbb5/maOo+aep3dLJiRb5KwueX8VsaGVPIXGXDeXkY=",
  },
  "verb-open": {
    /* Verb to open a page */
    val: "열기",
    translated: "auto",
    h: "PlLwT5LggHCmpOqXIa1xXdU/K/ztbasiD703lhOnltA=",
  },
}
export const pack:ILangPack = {
  name: '한국어',
  en_name: 'Korean',
  dir: 'ltr',
  numbers: {
    thousands: ',',
    decimal: '.',
    decimal_places: 2,
  },
  messages,
  contributors,
}
