import { ILangPack } from './spec';

export const pack:ILangPack = {
  name: 'English',
  messages: {
    labels: {
      TrialVersion: 'Trial Version',
      Rain: 'Rain',
    },
    nav: {
      Accounts: 'Accounts',
      Transactions: 'Transactions',
      Buckets: 'Buckets',
      Kicked: 'Kicked',
      Analysis: 'Analysis',
      AnalysisSub: {
        Recurring_Expenses: 'Recurring Expenses',
      },
      Connections: 'Connections',
      Import: 'Import',
    },
    menu: {
      file: {
        label: 'File',
        NewBudget: 'New Budget...',
        OpenBudget: 'Open Budget...',
        OpenRecent: 'Open Recent',
        DuplicateWindow: 'Duplicate Window',
        ImportTransactions: 'Import Transactions...',
      },
      register: {
        PurchaseFullVersion: 'Purchase Full Version...',
        EnterLicense: 'Enter License...',
      },
      help: {
        LearnMore: 'Learn More',
        ShowLogFiles: 'Show Log Files...',
        ReportBug: 'Report Bug...',
        Chat: 'Chat...',
      },
    },
  },
}
