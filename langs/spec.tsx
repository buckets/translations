export interface IMessages {
  labels: {
    TrialVersion: string,
    Rain: string,
  },
  nav: {
    Accounts: string,
    Transactions: string,
    Buckets: string,
    Kicked: string,
    Analysis: string,
    AnalysisSub: {
      Recurring_Expenses: string,
    }
    Connections: string,
    Import: string,
    ChatWithMatt: string,
  },
  menu: {
    file: {
      label: string,
      NewBudget: string,
      OpenBudget: string,
      OpenRecent: string,
      DuplicateWindow: string,
      ImportTransactions: string,
    },
    register: {
      PurchaseFullVersion: string,
      EnterLicense: string,
    },
    help: {
      LearnMore: string,
      ShowLogFiles: string,
      ReportBug: string,
      Chat: string,
    },
  }
}

export interface ILangPack {
  name: string;
  messages: IMessages;
}
