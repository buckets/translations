// Auto-generated file

import * as React from 'react'
import * as moment from 'moment'

interface IMsg<T> {
  val: T;
  translated: boolean;
  src: string[];
  h: string;
  newval?: T;
}
export interface IMessages {
  "accounts.balance_mismatch_msg": IMsg<string>;
  "accounts.name_placeholder": IMsg<string>;
  "accounts.more_link": IMsg<string>;
  "Account": IMsg<string>;
  "Balance": IMsg<string>;
  "Synced balance": IMsg<string>;
  "accounts.balance_mismatch_long_msg": IMsg<()=>string|JSX.Element>;
  "balance-as-of": IMsg<(date:any)=>string|JSX.Element>;
  "New account": IMsg<string>;
  "Connect to bank": IMsg<string>;
  "default account name": IMsg<string>;
  "sync.toast.syncing": IMsg<(start:any,end:any)=>string|JSX.Element>;
  "sync.status.week": IMsg<(sync_start:any)=>string|JSX.Element>;
  "sync.cancelled": IMsg<(trans_count:number)=>string|JSX.Element>;
  "sync.done": IMsg<(trans_count:number,start:any,end:any)=>string|JSX.Element>;
  "Un-kick": IMsg<string>;
  "more": IMsg<string>;
  "You haven't kicked the bucket yet...": IMsg<string>;
  "Bucket": IMsg<string>;
  "action.transfermoney": IMsg<(money:any)=>string|JSX.Element>;
  "action.transactmoney": IMsg<(deposit:any,withdraw:any)=>string|JSX.Element>;
  "rain left": IMsg<(money:any)=>string|JSX.Element>;
  "Deposit/Withdraw": IMsg<string>;
  "Self debt": IMsg<string>;
  "Amount of money over-allocated in buckets.": IMsg<string>;
  "Make it rain!": IMsg<string>;
  "action.New bucket": IMsg<string>;
  "action.New group": IMsg<string>;
  "Rain": IMsg<string>;
  "Total amount your buckets expect each month.": IMsg<string>;
  "default new bucket name": IMsg<string>;
  "default new group name": IMsg<string>;
  "Goal:": IMsg<string>;
  "Target date:": IMsg<string>;
  "Monthly deposit:": IMsg<string>;
  "Bucket type:": IMsg<string>;
  "buckettype.plain": IMsg<string>;
  "buckettype.deposit": IMsg<string>;
  "buckettype.goal-date": IMsg<string>;
  "buckettype.goal-deposit": IMsg<string>;
  "buckettype.deposit-date": IMsg<string>;
  "Goal completion:": IMsg<string>;
  "some day...": IMsg<string>;
  "Required deposit:": IMsg<string>;
  "Ending amount:": IMsg<string>;
  "Goal: 0": IMsg<string>;
  "rainfall-received-this-month": IMsg<(money:any,percent:number)=>string|JSX.Element>;
  "Effective": IMsg<string>;
  "effective.help": IMsg<string>;
  "action.transact": IMsg<string>;
  "bucketrain.help": IMsg<string>;
  "bucket.detailslabel": IMsg<string>;
  "misc group name": IMsg<string>;
  "single-bucket Kicked": IMsg<string>;
  "Bucket deleted completely": IMsg<string>;
  "Kick the bucket": IMsg<string>;
  "Balance:": IMsg<string>;
  "Rainfall:": IMsg<string>;
  "Posted": IMsg<string>;
  "Memo": IMsg<string>;
  "Amount": IMsg<string>;
  "noun.transfer": IMsg<string>;
  "bucket.transfer.help": IMsg<string>;
  "Misc": IMsg<string>;
  "Trial Version": IMsg<string>;
  "Accounts": IMsg<string>;
  "Transactions": IMsg<string>;
  "Buckets": IMsg<string>;
  "Kicked": IMsg<string>;
  "Analysis": IMsg<string>;
  "Recurring Expenses": IMsg<string>;
  "Connections": IMsg<string>;
  "Import": IMsg<string>;
  "Chat with Matt": IMsg<string>;
  "rain.help": IMsg<string>;
  "Income": IMsg<string>;
  "Expenses": IMsg<string>;
  "months gain/loss label": IMsg<(gain:any)=>string|JSX.Element>;
  "in the bank": IMsg<string>;
  "Sync": IMsg<string>;
  "Syncing...": IMsg<string>;
  "simplefin-connect-intro": IMsg<string>;
  "simplefin-get-token": IMsg<(mklink:any)=>string|JSX.Element>;
  "simplefin-paste": IMsg<string>;
  "Connecting...": IMsg<string>;
  "Unlinked Accounts": IMsg<string>;
  "Cancel sync": IMsg<string>;
  "Test Toast": IMsg<string>;
  "Connection saved!": IMsg<string>;
  "Delete": IMsg<string>;
  "ID": IMsg<string>;
  "Last used": IMsg<string>;
  "Description": IMsg<string>;
  "Create new account": IMsg<string>;
  "action.link-account": IMsg<string>;
  "Account created:": IMsg<string>;
  "Account linked": IMsg<string>;
  "match-count": IMsg<(current_match:number,total_matches:number)=>string|JSX.Element>;
  "Open Transaction File": IMsg<string>;
  "imported X trans": IMsg<(trans_count:number)=>string|JSX.Element>;
  "imported n trans": IMsg<(num_trans:number)=>string|JSX.Element>;
  "Name": IMsg<string>;
  "Import transaction file": IMsg<string>;
  "Month to Month": IMsg<string>;
  "Year to Year": IMsg<string>;
  "Avg:": IMsg<string>;
  "Net Transfers": IMsg<string>;
  "net-transfers.help": IMsg<string>;
  "Tot:": IMsg<string>;
  "Gain/Loss": IMsg<string>;
  "Ending Balance": IMsg<string>;
  "Budgeted": IMsg<string>;
  "Prior 12 months": IMsg<string>;
  "Prior 3 months": IMsg<string>;
  "Delete selected": IMsg<string>;
  "transactions.delete": IMsg<(size:number)=>string|JSX.Element>;
  "Import from file": IMsg<string>;
  "Show uncategorized": IMsg<string>;
  "sync-symbol help": IMsg<string>;
  "Category": IMsg<string>;
  "action.deposit": IMsg<string>;
  "action.withdraw": IMsg<string>;
  "Cancel": IMsg<string>;
  "Save": IMsg<string>;
  "noun.income": IMsg<string>;
  "noin.income": IMsg<string>;
  "Categorize": IMsg<string>;
  "Error": IMsg<string>;
  "There has been an error.": IMsg<string>;
  "error-detail": IMsg<string>;
  "action.ignore": IMsg<string>;
  "action.chat": IMsg<string>;
  "action.report bug": IMsg<string>;
  "bug-include-line": IMsg<string>;
  "OK": IMsg<string>;
  "Unable to open the file:": IMsg<string>;
  "File does not exist:": IMsg<string>;
  "Open Buckets Budget": IMsg<string>;
  "budget-file-type-name": IMsg<string>;
  "Buckets Budget Filename": IMsg<string>;
  "No file chosen": IMsg<string>;
  "File": IMsg<string>;
  "New Budget...": IMsg<string>;
  "Open Budget...": IMsg<string>;
  "Open Recent...": IMsg<string>;
  "Duplicate Window": IMsg<string>;
  "Import Transactions...": IMsg<string>;
  "Find...": IMsg<string>;
  "Find Next": IMsg<string>;
  "Find Previous": IMsg<string>;
  "View": IMsg<string>;
  "Learn More": IMsg<string>;
  "Show Log Files...": IMsg<string>;
  "Report Bug...": IMsg<string>;
  "Chat...": IMsg<string>;
  "Getting Started...": IMsg<string>;
  "Purchase Full Version...": IMsg<string>;
  "Enter License...": IMsg<string>;
  "Check For Updates...": IMsg<string>;
  "Speech": IMsg<string>;
  "Update Available": IMsg<string>;
  "version-available": IMsg<(newv:string)=>string|JSX.Element>;
  "Later": IMsg<string>;
  "Download": IMsg<string>;
  "Sync failed": IMsg<string>;
  "Invalid SimpleFIN Token": IMsg<string>;
  "Unable to claim access token": IMsg<string>;
  "Error fetching data": IMsg<string>;
  "Error parsing response": IMsg<string>;
  "Enter Buckets License": IMsg<string>;
  "enter-license-prompt": IMsg<string>;
  "Submit": IMsg<string>;
  "Success!": IMsg<string>;
  "Restart Buckets": IMsg<string>;
  "Invalid license": IMsg<string>;
  "Buckets Updates": IMsg<string>;
  "Check for Updates": IMsg<string>;
  "Checking for updates...": IMsg<string>;
  "Download Update": IMsg<string>;
  "You are running the latest version!": IMsg<string>;
  "Downloading update...": IMsg<string>;
  "Update downloaded.": IMsg<string>;
  "Install and Relaunch Buckets": IMsg<string>;
  "There was an error.  Maybe try again?": IMsg<string>;
  "Recently used": IMsg<string>;
}
export const DEFAULTS:IMessages = {
  "accounts.balance_mismatch_msg": {
    val: "The most recent synced balance does not match the balance computed from transactions.  Click more for more information.",
    translated: false,
    src: ["src/budget/accounts.tsx line 33"],
    h: "cMuGJ8vkjW+HMm8Ac01xULd9Lwf/iVtXYPi3WBC2JS4=",
  },
  "accounts.name_placeholder": {
    val: "no name",
    translated: false,
    src: ["src/budget/accounts.tsx line 40","src/budget/accounts.tsx line 97"],
    h: "UwMHboI9q49SZQkwMN8ps9zBi6YOSdtwakjLJwudtyA=",
  },
  "accounts.more_link": {
    val: "more",
    translated: false,
    src: ["src/budget/accounts.tsx line 46"],
    h: "uiqCMjSdL1TgDZHPNYXLnfN/yZq59+kDR/wKZSAP0hU=",
  },
  "Account": {
    val: "Account",
    translated: false,
    src: ["src/budget/accounts.tsx line 52","src/budget/connections.tsx line 217","src/budget/importing.tsx line 183","src/budget/transactions.tsx line 189"],
    h: "ihCgI4A9UaFZ63kuiKXqFHoGsze2dYwzpgSVU0clMfQ=",
  },
  "Balance": {
    val: "Balance",
    translated: false,
    src: ["src/budget/accounts.tsx line 53","src/budget/accounts.tsx line 105","src/budget/buckets.tsx line 784"],
    h: "azvDWgVPY349dq4q8mbtpDhehRsFKYKNzMk/TcuOvEQ=",
  },
  "Synced balance": {
    val: "Synced balance",
    translated: false,
    src: ["src/budget/accounts.tsx line 77"],
    h: "yyCVeQRle/vbcZ1/QyVYtL+ZmyQ5WanHCYKZpJqFd6o=",
  },
  "accounts.balance_mismatch_long_msg": {
    val: () => {
            return (<span>
              The "Balance" above is this account's balance as of the latest entered transaction.
              The "Synced balance" is the this account's balance <i>as reported by the bank.</i>
              Some banks always report <i>today's balance</i> as the "Synced balance" even though <i>today's transactions</i> haven't been sent to Buckets yet.
              So this mismatch will usually resolve itself once all the transactions in your bank have been synced into Buckets.
          </span>)},
    translated: false,
    src: ["src/budget/accounts.tsx line 82"],
    h: "wR5L88lhIXbxAVDXEZbN1lwbnZjYUBkAifA2KtAg8dM=",
  },
  "balance-as-of": {
    val: (date:JSX.Element) => {
            return <span>as of {date}</span>
          },
    translated: false,
    src: ["src/budget/accounts.tsx line 112"],
    h: "zfEhD0nTmeclrDPBvF4YQvThWfdELzmW0m1T1UJNEKw=",
  },
  "New account": {
    val: "New account",
    translated: false,
    src: ["src/budget/accounts.tsx line 147"],
    h: "MtAiANg7ugdeUiGmiGklfBPG4T1igh1iChKeC0Mdxnc=",
  },
  "Connect to bank": {
    val: "Connect to bank",
    translated: false,
    src: ["src/budget/accounts.tsx line 148","src/budget/connections.tsx line 137","src/budget/importing.tsx line 201"],
    h: "0T7eA3oFvMxyPIOAkMZ2rDpJxQVORgxrLqrDx87L1ZY=",
  },
  "default account name": {
    val: "Savings",
    translated: false,
    src: ["src/budget/accounts.tsx line 174"],
    h: "zCYN8vtLT3Hhb9CbDDSL2xOOjqhzmmhMa5yWDTR7bCE=",
  },
  "sync.toast.syncing": {
    val: (start:moment.Moment, end:moment.Moment) => {
        return `Syncing transactions from ${start.format('ll')} to ${end.format('ll')}`;
      },
    translated: false,
    src: ["src/budget/appstate.ts line 238"],
    h: "f7R9zSdK0q5+lZ8I9QRhiwN5ENKyWFnrmUG6Gltegfs=",
  },
  "sync.status.week": {
    val: (sync_start:moment.Moment) => {
        return `week of ${sync_start.format('ll')}`;
      },
    translated: false,
    src: ["src/budget/appstate.ts line 245"],
    h: "PDBHTH/ocFsAZ2tQBdsDt9agGKjcgYvqJLlYn/lwZeU=",
  },
  "sync.cancelled": {
    val: (trans_count:number) => {
          return `Synced ${trans_count} transactions before being cancelled.`;
        },
    translated: false,
    src: ["src/budget/appstate.ts line 252"],
    h: "vKPTjoWpzYT7nXd/1E8Hklltu1+GqPNCLKpPvhQCMjI=",
  },
  "sync.done": {
    val: (trans_count:number, start:moment.Moment, end:moment.Moment) => {
          return `Synced ${trans_count} transactions from ${start.format('ll')} to ${end.format('ll')}`;
        },
    translated: false,
    src: ["src/budget/appstate.ts line 256"],
    h: "G02Wh4RjKpcx6OWMrzrWbWH2OBPaLf3kaUffUt0FeYY=",
  },
  "Un-kick": {
    val: "Un-kick",
    translated: false,
    src: ["src/budget/buckets.tsx line 44","src/budget/buckets.tsx line 961"],
    h: "P5Z1ij4jmS06jNOQiHymi+/D+uYJktoalTdw+AHGukM=",
  },
  "more": {
    val: "more",
    translated: false,
    src: ["src/budget/buckets.tsx line 46"],
    h: "uiqCMjSdL1TgDZHPNYXLnfN/yZq59+kDR/wKZSAP0hU=",
  },
  "You haven't kicked the bucket yet...": {
    val: "You haven't kicked the bucket yet...",
    translated: false,
    src: ["src/budget/buckets.tsx line 52"],
    h: "mtaAsLJ7BgWZcbIkRmZ4ZPSSRGXj6vJ2H8+diLhIba4=",
  },
  "Bucket": {
    val: "Bucket",
    translated: false,
    src: ["src/budget/buckets.tsx line 59","src/budget/buckets.tsx line 783","src/budget/reports.tsx line 533"],
    h: "APPSgbsmF5H9B7YIJDaPcEVh4T7ctWU+hxQv/eG1Dg0=",
  },
  "action.transfermoney": {
    val: (money:JSX.Element) => {
          return <span>Transfer {money}</span>
        },
    translated: false,
    src: ["src/budget/buckets.tsx line 98"],
    h: "/9WmQxngVMz0QosfkB5Hz/VKJB9Hx2ccEDUf5+3YIPo=",
  },
  "action.transactmoney": {
    val: (deposit:JSX.Element, withdraw:JSX.Element) => {
        if (deposit && withdraw) {
          return <span>Deposit {deposit} and withdraw {withdraw}</span>
        } else if (deposit) {
          return <span>Deposit {deposit}</span>
        } else {
          return <span>Withdraw {withdraw}</span>
        }
      },
    translated: false,
    src: ["src/budget/buckets.tsx line 102"],
    h: "Y8kM6FlfTVDdYnezCEHOEVkFf5hedllAi2iSz2T5/g0=",
  },
  "rain left": {
    val: (money:JSX.Element) => {
        return <span>{money} rain left</span>
      },
    translated: false,
    src: ["src/budget/buckets.tsx line 118"],
    h: "l19s59dGdfkfn+e8R7vHs0ACvroQ1qy0jhZYNafh2to=",
  },
  "Deposit/Withdraw": {
    val: "Deposit/Withdraw",
    translated: false,
    src: ["src/budget/buckets.tsx line 127"],
    h: "i8dU5/EFDzzyAHP1gvlIy1HyMr2CcFziXigaOpNwDJQ=",
  },
  "Self debt": {
    val: "Self debt",
    translated: false,
    src: ["src/budget/buckets.tsx line 149"],
    h: "zRWPLHqBTGcGqHHBHWdXpN2eOUUhRhvCyeAccFlR9Z4=",
  },
  "Amount of money over-allocated in buckets.": {
    val: "Amount of money over-allocated in buckets.",
    translated: false,
    src: ["src/budget/buckets.tsx line 151"],
    h: "kFucvPefN9Kae7dArnle8i0rTZZq1U+3d8w81lDNVKw=",
  },
  "Make it rain!": {
    val: "Make it rain!",
    translated: false,
    src: ["src/budget/buckets.tsx line 181"],
    h: "GCU3Hru9VCit7F+BYEMKmg5U8gsc1/UZ+o5wsbMAkeY=",
  },
  "action.New bucket": {
    val: "New bucket",
    translated: false,
    src: ["src/budget/buckets.tsx line 182","src/budget/buckets.tsx line 794"],
    h: "aIKjDQtVbUMjIHU/6fccfiWBUIwUBnAofdzRJTCuytI=",
  },
  "action.New group": {
    val: "New group",
    translated: false,
    src: ["src/budget/buckets.tsx line 183"],
    h: "054RU7JImk6Pavh27xHA9CgGIgjmP0dYIgXez2UWx34=",
  },
  "Rain": {
    val: "Rain",
    translated: false,
    src: ["src/budget/buckets.tsx line 185","src/budget/buckets.tsx line 787","src/budget/budget.tsx line 184"],
    h: "fqeHyOaOYnCtGAcJlJbhAR37DG6YMrsasUNtiL6z8hc=",
  },
  "Total amount your buckets expect each month.": {
    val: "Total amount your buckets expect each month.",
    translated: false,
    src: ["src/budget/buckets.tsx line 187"],
    h: "UtK2gxh+N9D/p1G6dLyhcKMP5Df5XCyEp0jM0c+qoUw=",
  },
  "default new bucket name": {
    val: "New Bucket",
    translated: false,
    src: ["src/budget/buckets.tsx line 214","src/budget/buckets.tsx line 799"],
    h: "FchHrB6weykpHiqRVxc5QKb6BEdhH4DXrc+t6RNcF8M=",
  },
  "default new group name": {
    val: "New Group",
    translated: false,
    src: ["src/budget/buckets.tsx line 217"],
    h: "1dmXA/VlW+tjhojOGcypAy70L2wupHf9EdVjUByvpmA=",
  },
  "Goal:": {
    val: "Goal:",
    translated: false,
    src: ["src/budget/buckets.tsx line 364","src/budget/buckets.tsx line 494"],
    h: "77+E2dn/Mw53xjGhNc6irsiq1WULAiC4yIyt4NaO0DM=",
  },
  "Target date:": {
    val: "Target date:",
    translated: false,
    src: ["src/budget/buckets.tsx line 383"],
    h: "InmNQoNHlJkDpjvEB+J1XPqDWRqnfNIUwTQ86iNiOGc=",
  },
  "Monthly deposit:": {
    val: "Monthly deposit:",
    translated: false,
    src: ["src/budget/buckets.tsx line 399"],
    h: "GKlnbgfjEkmlOI0TT0pyfI30T1/0jrXjT01JZrBTpP0=",
  },
  "Bucket type:": {
    val: "Bucket type:",
    translated: false,
    src: ["src/budget/buckets.tsx line 419"],
    h: "NMC+sjsH6UgNhNtiqYeiHDi4zDK/+S5h5yMfZ5CQk1c=",
  },
  "buckettype.plain": {
    val: "Plain old bucket",
    translated: false,
    src: ["src/budget/buckets.tsx line 426"],
    h: "AqvTaZK8lidyI8PZ9JXBBQABazz8uxM+uQM6iEuyO6w=",
  },
  "buckettype.deposit": {
    val: "Recurring expense",
    translated: false,
    src: ["src/budget/buckets.tsx line 427"],
    h: "3HXotB9ZHFm14ArdM0RfCT0merw8+KuXthbzotnPRec=",
  },
  "buckettype.goal-date": {
    val: "Save X by Y date",
    translated: false,
    src: ["src/budget/buckets.tsx line 428"],
    h: "+boZHIer4ggkvJ8A5cSl1EVyWRwKigC9UkBFn4WSEdg=",
  },
  "buckettype.goal-deposit": {
    val: "Save X by depositing Z/mo",
    translated: false,
    src: ["src/budget/buckets.tsx line 429"],
    h: "BUzPSZsbi+lN/3tb6eF63oa7CEzS94r6ee5jf5G7inA=",
  },
  "buckettype.deposit-date": {
    val: "Save Z/mo until Y date",
    translated: false,
    src: ["src/budget/buckets.tsx line 430"],
    h: "zdWdEX9eN5qpFDboBF+wi9EIguwYsB9nQCzN9GjrxMc=",
  },
  "Goal completion:": {
    val: "Goal completion:",
    translated: false,
    src: ["src/budget/buckets.tsx line 443"],
    h: "v+G5gj6B+MtHwQovNmj/BWbpnQncARZGo+swhE1fbtg=",
  },
  "some day...": {
    val: "some day...",
    translated: false,
    src: ["src/budget/buckets.tsx line 445"],
    h: "4K+3SY48UwcktULX4xiGt6J8Q8Hys3JjUR3t62WI6mo=",
  },
  "Required deposit:": {
    val: "Required deposit:",
    translated: false,
    src: ["src/budget/buckets.tsx line 454"],
    h: "Q34JZduUI2Lx8xxjkeH/Md92nqWgEcbPFZjgf5m7tXA=",
  },
  "Ending amount:": {
    val: "Ending amount:",
    translated: false,
    src: ["src/budget/buckets.tsx line 466"],
    h: "0IUvXk9nogxjdL1n0VZPrxcMOUZODNXMlGrlpyXq8bI=",
  },
  "Goal: 0": {
    val: "Goal: 0",
    translated: false,
    src: ["src/budget/buckets.tsx line 488"],
    h: "rtvJnJFYA7lHYjPjGpF27/h2So3pRdrRLjfnkg78woQ=",
  },
  "rainfall-received-this-month": {
    val: (money:JSX.Element, percent:number) => {
          return <span>Rainfall received this month: {money} ({percent}%)</span>
        },
    translated: false,
    src: ["src/budget/buckets.tsx line 574"],
    h: "8WyxY5Vv9Dh9oCx1HkelgzuyfrAW/ynIxBz0ocmoEl4=",
  },
  "Effective": {
    val: "Effective",
    translated: false,
    src: ["src/budget/buckets.tsx line 785"],
    h: "Iu58QrugjAc/VqZhXc0aKtmSC8KziRWTzVTiliXpAL0=",
  },
  "effective.help": {
    val: "This would be the balance if no buckets were in debt.",
    translated: false,
    src: ["src/budget/buckets.tsx line 785"],
    h: "D6V8nTUoyPCGCdFMHiUFZiACXp8Lpz5MFDbiujAlfSc=",
  },
  "action.transact": {
    val: "Transact",
    translated: false,
    src: ["src/budget/buckets.tsx line 786"],
    h: "A8cB9Rz7UbbFB6Y9hBfS0LjKzndtjd+8KoyILgsjbcU=",
  },
  "bucketrain.help": {
    val: "This is how much money these buckets want each month.  The little box indicates how much they have received.",
    translated: false,
    src: ["src/budget/buckets.tsx line 787"],
    h: "3dbOFkUiGaEoD01CP7kIWDQHgUbULWexjdEKdEAF3sA=",
  },
  "bucket.detailslabel": {
    val: "Details",
    translated: false,
    src: ["src/budget/buckets.tsx line 788"],
    h: "68e/QPEuI36iIEcTWmKDrVU9KBReQ3EjFzF1F06KQMA=",
  },
  "misc group name": {
    val: "Misc",
    translated: false,
    src: ["src/budget/buckets.tsx line 925"],
    h: "DPoc7CIbzLHJxuar3WnaidO3Ryy1QtYkCswRzVHtVBg=",
  },
  "single-bucket Kicked": {
    val: "Kicked",
    translated: false,
    src: ["src/budget/buckets.tsx line 957"],
    h: "cWApfoLlcBvoHizIFtrDQq3uwrZIYMXKO1iLMvv8szI=",
  },
  "Bucket deleted completely": {
    val: "Bucket deleted completely",
    translated: false,
    src: ["src/budget/buckets.tsx line 970"],
    h: "gBMlSFTWDRRSWZeZ3fuxDhpJnhv2MoF3EvZSwo1BZHg=",
  },
  "Kick the bucket": {
    val: "Kick the bucket",
    translated: false,
    src: ["src/budget/buckets.tsx line 973"],
    h: "IvzeGJ9G+Rns8Rbnal26flTFzd+yBNSEBQSptdNy8t8=",
  },
  "Balance:": {
    val: "Balance:",
    translated: false,
    src: ["src/budget/buckets.tsx line 1023"],
    h: "hHHAAGXs0oscbD5jkMQSQUQ5sLsgo/sPaBumUBAq+CA=",
  },
  "Rainfall:": {
    val: "Rainfall:",
    translated: false,
    src: ["src/budget/buckets.tsx line 1024"],
    h: "bcN/iGnrCShKBVfwMuv4r1YDwr5UdkUbry7nN2Ws3ms=",
  },
  "Posted": {
    val: "Posted",
    translated: false,
    src: ["src/budget/buckets.tsx line 1070","src/budget/transactions.tsx line 188"],
    h: "h6jjM8ytGdEj+QfDnTVzEdq+0oLSE9zd+MArY7gtjzU=",
  },
  "Memo": {
    val: "Memo",
    translated: false,
    src: ["src/budget/buckets.tsx line 1071","src/budget/transactions.tsx line 190"],
    h: "9yClwoAwAV0+DXl8NnkkAnlUi+Ebp2soPwN5meYKgWY=",
  },
  "Amount": {
    val: "Amount",
    translated: false,
    src: ["src/budget/buckets.tsx line 1072","src/budget/transactions.tsx line 191"],
    h: "DHNNaJF4hWTWIFdaMdMhUT4aSdti7ZfaNexABzxWWzc=",
  },
  "noun.transfer": {
    val: "Transfer",
    translated: false,
    src: ["src/budget/buckets.tsx line 1073","src/budget/transactions.tsx line 513","src/budget/transactions.tsx line 529"],
    h: "B5GGqjnE8KOjYJjhsFV7zs5TGmGmVPqjihzMVxHJ3sI=",
  },
  "bucket.transfer.help": {
    val: "A transfer is a transaction from one bucket to another.  If the transaction isn't income or an expense, it's likely a transfer.",
    translated: false,
    src: ["src/budget/buckets.tsx line 1073"],
    h: "dh5nslkaB1wNR4tJ5zAn6Hms+9oJqBDmAIR5k6WE6iY=",
  },
  "Misc": {
    val: "Misc",
    translated: false,
    src: ["src/budget/buckets.tsx line 1074"],
    h: "DPoc7CIbzLHJxuar3WnaidO3Ryy1QtYkCswRzVHtVBg=",
  },
  "Trial Version": {
    val: "Trial Version",
    translated: false,
    src: ["src/budget/budget.tsx line 91","src/mainprocess/menu.ts line 175"],
    h: "GtZIXrHILA84HlpKlxi3BErHwR7WIYkQ/e5BE0Fiaxg=",
  },
  "Accounts": {
    val: "Accounts",
    translated: false,
    src: ["src/budget/budget.tsx line 127"],
    h: "1oHDkv2zB1yiCABVTWBY5oX4Ccu36nJBCG7Q+JVg8TA=",
  },
  "Transactions": {
    val: "Transactions",
    translated: false,
    src: ["src/budget/budget.tsx line 128"],
    h: "4+yGUer/b71cfxTdeUa5QbonqN9ezC8Eii7KO22Ety0=",
  },
  "Buckets": {
    val: "Buckets",
    translated: false,
    src: ["src/budget/budget.tsx line 129"],
    h: "fMPIWzGvVEG0t7+bZX1ucgzulk8FaQfqioLgwLsj+oE=",
  },
  "Kicked": {
    val: "Kicked",
    translated: false,
    src: ["src/budget/budget.tsx line 131"],
    h: "cWApfoLlcBvoHizIFtrDQq3uwrZIYMXKO1iLMvv8szI=",
  },
  "Analysis": {
    val: "Analysis",
    translated: false,
    src: ["src/budget/budget.tsx line 133"],
    h: "+LNAOPSLW2rpFCrT+U1suhdnoYyZa1k8ALddRlddDlI=",
  },
  "Recurring Expenses": {
    val: "Recurring Expenses",
    translated: false,
    src: ["src/budget/budget.tsx line 136","src/budget/reports.tsx line 529"],
    h: "yDp5Agru+QzDSy583s3kjOdZbbe6X1WDfMeSNXsYlaY=",
  },
  "Connections": {
    val: "Connections",
    translated: false,
    src: ["src/budget/budget.tsx line 139","src/budget/connections.tsx line 117"],
    h: "1hPfKAqhO0JhEGc2rQ8tee2sqrIAP38KrxQcfLF3I1Y=",
  },
  "Import": {
    val: "Import",
    translated: false,
    src: ["src/budget/budget.tsx line 140"],
    h: "F3sijvfYz3oB4iz2rVHjUvNDLQs43MbXDVIr5VFA2/c=",
  },
  "Chat with Matt": {
    val: "Chat with Matt",
    translated: false,
    src: ["src/budget/budget.tsx line 148"],
    h: "9nQjbkjkf8l2mX6xeNaU///NYhxxWFqnvTKOmakMmRY=",
  },
  "rain.help": {
    val: "Rain is the money you haven't yet put into buckets.  After transactions are categorized, always keep this 0 or higher.",
    translated: false,
    src: ["src/budget/budget.tsx line 184"],
    h: "EkC6Xr/2fRJ+4T4rwU2qK1uLpBk7ZpUa9aLGt0wuNr0=",
  },
  "Income": {
    val: "Income",
    translated: false,
    src: ["src/budget/budget.tsx line 188","src/budget/reports.tsx line 213"],
    h: "D2fJbta5d1Z5QYuRC5zzkBHsItZOOgY4FKrFJ64BvRs=",
  },
  "Expenses": {
    val: "Expenses",
    translated: false,
    src: ["src/budget/budget.tsx line 193","src/budget/reports.tsx line 224"],
    h: "d6aKytFAPwPUzFOv41R0itfcMu11VdE29vkM05dnpBU=",
  },
  "months gain/loss label": {
    val: (gain) => {
                        return gain >= 0 ? "Month's gain" : "Month's loss";
                      },
    translated: false,
    src: ["src/budget/budget.tsx line 198"],
    h: "lGcEnJfZJau2h5ohbKNxY1FjL0vJoW3oJOJQwSCt+Kg=",
  },
  "in the bank": {
    val: "in the bank",
    translated: false,
    src: ["src/budget/budget.tsx line 204"],
    h: "7gl7ZdgJ3HfhOcQMiU7hVkFpXIR3KFxXtlMhKyE/Irw=",
  },
  "Sync": {
    val: "Sync",
    translated: false,
    src: ["src/budget/connections.tsx line 22","src/budget/connections.tsx line 136"],
    h: "zJAmFTCwHue7APF8kCb39YCX8J17Tsy3mxyhpQQhge8=",
  },
  "Syncing...": {
    val: "Syncing...",
    translated: false,
    src: ["src/budget/connections.tsx line 27"],
    h: "kuwg7vpvp082IqBtRakekOVu7bqB4PYxhnFVsoBDt/g=",
  },
  "simplefin-connect-intro": {
    val: "Connecting to your bank account will make it easy to pull transaction history from your bank into Buckets.  To connect, do the following:",
    translated: false,
    src: ["src/budget/connections.tsx line 75"],
    h: "QyrzIPdjiuD+b5YSn7kbPRbYYDDwryIuscSYpL+TgJw=",
  },
  "simplefin-get-token": {
    val: (mklink) => {
              return <span>Get a SimpleFIN Token from the {mklink('SimpleFIN Bridge')}</span>
            },
    translated: false,
    src: ["src/budget/connections.tsx line 79"],
    h: "VEeKjngcHxowWbB2xWy5oNH4MXIfJQ7EqpiomT6V0fg=",
  },
  "simplefin-paste": {
    val: "Then paste your SimpleFIN Token here:",
    translated: false,
    src: ["src/budget/connections.tsx line 89"],
    h: "vAoRsY20OBqs8bleaXD3auq8VnO9gQj7gXz5p+p71EI=",
  },
  "Connecting...": {
    val: "Connecting...",
    translated: false,
    src: ["src/budget/connections.tsx line 94"],
    h: "fYdj0RfOQMPN3n28gswFnK4aOvozPH0hqm9oqd+NcWI=",
  },
  "Unlinked Accounts": {
    val: "Unlinked Accounts",
    translated: false,
    src: ["src/budget/connections.tsx line 109"],
    h: "BPAjsiEkATiwSf9f6kde3yZwSmmyiPDLiZ7Rr+3Zv/A=",
  },
  "Cancel sync": {
    val: "Cancel sync",
    translated: false,
    src: ["src/budget/connections.tsx line 136"],
    h: "8xFWyPShIifEhumOA/PeoTtccm5TTtbQmWFViIGcPQA=",
  },
  "Test Toast": {
    val: "Test Toast",
    translated: false,
    src: ["src/budget/connections.tsx line 140"],
    h: "5SbiliirLaAKLdgRThX+cO2RwGuC87t3Z1O0xT2WsAE=",
  },
  "Connection saved!": {
    val: "Connection saved!",
    translated: false,
    src: ["src/budget/connections.tsx line 168"],
    h: "wAgyeIQsbaI/kFPgBf8sWlKK1mf/VcP7BjHpC9TNYuc=",
  },
  "Delete": {
    val: "Delete",
    translated: false,
    src: ["src/budget/connections.tsx line 184"],
    h: "sm3jcrSw6qxgICiEpy25imvm6QNueF6oZ+oBxfeSEJg=",
  },
  "ID": {
    val: "ID",
    translated: false,
    src: ["src/budget/connections.tsx line 190"],
    h: "ge86Jcy26vcv5uPFI29MfLOxHh8ctACck6nRdrl9aM4=",
  },
  "Last used": {
    val: "Last used",
    translated: false,
    src: ["src/budget/connections.tsx line 191"],
    h: "G5a6Jdor9jRT/Wtcg9SfXQsvqL7VFvnVD2+gq7yT1Jg=",
  },
  "Description": {
    val: "Description",
    translated: false,
    src: ["src/budget/connections.tsx line 216"],
    h: "bg0ZDIR+z+PEkinc/ZyqkERMsVZcFFm3NhQoIqZH+WM=",
  },
  "Create new account": {
    val: "Create new account",
    translated: false,
    src: ["src/budget/connections.tsx line 253","src/budget/importing.tsx line 150"],
    h: "SmoVFbeAWSO4cW1YQJbuDJQz8kenVz5++WTJEkS6Vos=",
  },
  "action.link-account": {
    val: "Link",
    translated: false,
    src: ["src/budget/connections.tsx line 258","src/budget/importing.tsx line 155"],
    h: "unfAYQpjuyuTjjRCodr+S+jNjRmz3nahjZ91u/j5HfE=",
  },
  "Account created:": {
    val: "Account created:",
    translated: false,
    src: ["src/budget/connections.tsx line 267","src/budget/importing.tsx line 101"],
    h: "3akIYFguLafrrZub6+2XJ3aY6DNEQ95QP5aIT64aov4=",
  },
  "Account linked": {
    val: "Account linked",
    translated: false,
    src: ["src/budget/connections.tsx line 271","src/budget/importing.tsx line 105"],
    h: "6BIwDJOD6nTFkAPNFUFkl5FadqIUsOu2NiXhkqUBfec=",
  },
  "match-count": {
    val: (current_match:number, total_matches:number) => {
        return `${current_match} of ${total_matches}`;
      },
    translated: false,
    src: ["src/budget/finding.tsx line 129"],
    h: "gGpkwXhLiDpxY0YOCXAFl6Q8D6sb7BX93TqgFRObOqo=",
  },
  "Open Transaction File": {
    val: "Open Transaction File",
    translated: false,
    src: ["src/budget/importing.tsx line 40"],
    h: "8teUT2P/KToCDoMTqS88JNVtG9PTE/5PojtS1SGmokw=",
  },
  "imported X trans": {
    val: (trans_count:number) => {
          return `Imported ${trans_count} transactions.`;
        },
    translated: false,
    src: ["src/budget/importing.tsx line 81"],
    h: "VXbRvtaAKzRwSAIJE5VPPrQxzJLGUyjjCmde8Y4/hGs=",
  },
  "imported n trans": {
    val: (num_trans:number) => {
      return `Imported ${num_trans} transactions.`;
    },
    translated: false,
    src: ["src/budget/importing.tsx line 116"],
    h: "fKPnz16l9WkD5o21rN0yPtBFwuaTyHbAiz1rQ5Aj5Nk=",
  },
  "Name": {
    val: "Name",
    translated: false,
    src: ["src/budget/importing.tsx line 182"],
    h: "bMXfNfAzjiMOnmM+rZmR8I9iyrRaMmSXja7cZ0eGcwU=",
  },
  "Import transaction file": {
    val: "Import transaction file",
    translated: false,
    src: ["src/budget/importing.tsx line 198"],
    h: "gzuSikXZDG8MBMTly4ipzOZIG7lfvL/JbSX4eNJEfMw=",
  },
  "Month to Month": {
    val: "Month to Month",
    translated: false,
    src: ["src/budget/reports.tsx line 67"],
    h: "VYq/DQYARQsjblXvXMijYnVbyFbLkqoRYmQ8IHhTbDQ=",
  },
  "Year to Year": {
    val: "Year to Year",
    translated: false,
    src: ["src/budget/reports.tsx line 79"],
    h: "YBGCdB/QACmMM/QS2qMrGlC8qtfWz9bhue7sgDaIRHg=",
  },
  "Avg:": {
    val: "Avg:",
    translated: false,
    src: ["src/budget/reports.tsx line 220","src/budget/reports.tsx line 231"],
    h: "EVMZyhHQEFPlI2ib8VqTJo25bJBk8gHsgZR1SZ2Jcj0=",
  },
  "Net Transfers": {
    val: "Net Transfers",
    translated: false,
    src: ["src/budget/reports.tsx line 235"],
    h: "4FYbJ2rCxhrWW9XBurKbS2mOSTwlxIXH/jCv5FDofeM=",
  },
  "net-transfers.help": {
    val: "Net transfers are the sum total of all transactions marked as a transfer.  It should be 0.  If it's not, click through to make sure there aren't duplicate transactions or transactions miscategorized as transfers.",
    translated: false,
    src: ["src/budget/reports.tsx line 235"],
    h: "2P3jr/VPQ35tlPa/uDMqi1spXO4Rinn76fgfVOegiA8=",
  },
  "Tot:": {
    val: "Tot:",
    translated: false,
    src: ["src/budget/reports.tsx line 242","src/budget/reports.tsx line 380"],
    h: "saHMHdDjhEhiq86BBPRvnL+Rb3M/qOu30ZLtUk20QIM=",
  },
  "Gain/Loss": {
    val: "Gain/Loss",
    translated: false,
    src: ["src/budget/reports.tsx line 373"],
    h: "Kop7hNPijjGN5jXxpDmcP32CJy22tzVz1qXWTjNxVg0=",
  },
  "Ending Balance": {
    val: "Ending Balance",
    translated: false,
    src: ["src/budget/reports.tsx line 432"],
    h: "bwan2qqqdDloluCkgp+UPYWSAeOQk9zkaNwb2p0kUDk=",
  },
  "Budgeted": {
    val: "Budgeted",
    translated: false,
    src: ["src/budget/reports.tsx line 534"],
    h: "aP72arzLN/j79zGtL8DWE7wcBGciRcWqMOR1aTHJmNo=",
  },
  "Prior 12 months": {
    val: "Prior 12 months",
    translated: false,
    src: ["src/budget/reports.tsx line 535"],
    h: "0M7KePS3rfMQeASk2IqHTYGXTAj0v1V27kPVHCsgPaY=",
  },
  "Prior 3 months": {
    val: "Prior 3 months",
    translated: false,
    src: ["src/budget/reports.tsx line 536"],
    h: "spZsVyneGnwmYcYcv5FAET+76DRv205SW2FspmtvKpI=",
  },
  "Delete selected": {
    val: "Delete selected",
    translated: false,
    src: ["src/budget/transactions.tsx line 84"],
    h: "bsJ1Vyhm8h3AT4g3iLkWOso1mGTLsIFexh1ymwKankw=",
  },
  "transactions.delete": {
    val: (size:number) => {
        return `Delete selected (${size})`
      },
    translated: false,
    src: ["src/budget/transactions.tsx line 86"],
    h: "/u86qzz5nT6n9ZqcgDLwC0GHmjDy0cELJjSzjBAim5g=",
  },
  "Import from file": {
    val: "Import from file",
    translated: false,
    src: ["src/budget/transactions.tsx line 98"],
    h: "pFUUU47IsBM4t150vlDrtZPYmzaQTNFLynl5hVnyaWI=",
  },
  "Show uncategorized": {
    val: "Show uncategorized",
    translated: false,
    src: ["src/budget/transactions.tsx line 108"],
    h: "ZHhB69+qL72sD+upbAXLXIDMlEWXgSbwb5RupMV5K0c=",
  },
  "sync-symbol help": {
    val: "This symbol means the transaction came from an import/sync",
    translated: false,
    src: ["src/budget/transactions.tsx line 171"],
    h: "S3tDRls+AJYj6f8jSNSCa1FVyNY+ngn6Db1EQJ3dpLE=",
  },
  "Category": {
    val: "Category",
    translated: false,
    src: ["src/budget/transactions.tsx line 192"],
    h: "/frArhrZL+bxdiiBKi/1cYdR/tSD7rhbMHJLgHQQdNQ=",
  },
  "action.deposit": {
    val: "Deposit",
    translated: false,
    src: ["src/budget/transactions.tsx line 262"],
    h: "m1MGQLRYdNxU9nxvjA8qOlurdztaw7NQI15XBoTWhN8=",
  },
  "action.withdraw": {
    val: "Withdraw",
    translated: false,
    src: ["src/budget/transactions.tsx line 264"],
    h: "vkX+S+y0j4o6Bq0+STQc4O3AXZINynrIwo6qzEul+XE=",
  },
  "Cancel": {
    val: "Cancel",
    translated: false,
    src: ["src/budget/transactions.tsx line 508"],
    h: "wHdMGFBg/BNmqwwBSIr4TrXk4fT1kilDHgZN5z4N5sU=",
  },
  "Save": {
    val: "Save",
    translated: false,
    src: ["src/budget/transactions.tsx line 509"],
    h: "wduD0WXtkIpIb6B4R8AA7ph724u3/Gtv27uaky6rEAU=",
  },
  "noun.income": {
    val: "Income",
    translated: false,
    src: ["src/budget/transactions.tsx line 512"],
    h: "D2fJbta5d1Z5QYuRC5zzkBHsItZOOgY4FKrFJ64BvRs=",
  },
  "noin.income": {
    val: "Income",
    translated: false,
    src: ["src/budget/transactions.tsx line 524"],
    h: "D2fJbta5d1Z5QYuRC5zzkBHsItZOOgY4FKrFJ64BvRs=",
  },
  "Categorize": {
    val: "Categorize",
    translated: false,
    src: ["src/budget/transactions.tsx line 552"],
    h: "mA6/TefxgXpo2M+OUx/ATLQ4QYHv4t1+8vy3MmV+EQg=",
  },
  "Error": {
    val: "Error",
    translated: false,
    src: ["src/errors.ts line 17","src/errors.ts line 46"],
    h: "/ErBlknw7o83xx0uIDCjdDA4u5bAwnNZuhFd2GV1Zcw=",
  },
  "There has been an error.": {
    val: "There has been an error.",
    translated: false,
    src: ["src/errors.ts line 18"],
    h: "viN5uLRSpgzhvoD9KO9g1cr7ihLQ0Men9LiUpy9RcwE=",
  },
  "error-detail": {
    val: "If this error keeps happening or doesn't make sense, please report a bug or chat with us.",
    translated: false,
    src: ["src/errors.ts line 19"],
    h: "10Kk29tlHpBnhcTf7RRMfq1OZPGZgvPPguRlInaLNoY=",
  },
  "action.ignore": {
    val: "Ignore",
    translated: false,
    src: ["src/errors.ts line 20"],
    h: "K8sAh2XND1/tJOuX9xTLmr1fQjUOB70cfc9GwI62fEs=",
  },
  "action.chat": {
    val: "Chat",
    translated: false,
    src: ["src/errors.ts line 21"],
    h: "Ct9w1d0AYWvEp42SCfVm7DFmet6f43eJOSWwg17o+7A=",
  },
  "action.report bug": {
    val: "Report Bug",
    translated: false,
    src: ["src/errors.ts line 22"],
    h: "RxuE9Dh0Dadda2PtjUPD0dQ7b8aQok84Ytvw31ABBRU=",
  },
  "bug-include-line": {
    val: "Include anything else you want to add above this line",
    translated: false,
    src: ["src/errors.ts line 35"],
    h: "rn0WG7RYQFy1lbX3RhGEuTns0lNN14OcJzHTVx2eOMo=",
  },
  "OK": {
    val: "OK",
    translated: false,
    src: ["src/errors.ts line 48"],
    h: "mMSSK7ZBxlx6MLe8r98jC5sAtmk2McVhRqslsnhu5KM=",
  },
  "Unable to open the file:": {
    val: "Unable to open the file:",
    translated: false,
    src: ["src/mainprocess/files.ts line 44"],
    h: "MxbgnQR4Cyi549ltzzIDDAI1qRGqoeRm0zOApQMS2DY=",
  },
  "File does not exist:": {
    val: "File does not exist:",
    translated: false,
    src: ["src/mainprocess/files.ts line 102"],
    h: "RPeWW9lCHkg+d6XybADj3OH2jxrYcSOhrA3+QHEcYz0=",
  },
  "Open Buckets Budget": {
    val: "Open Buckets Budget",
    translated: false,
    src: ["src/mainprocess/files.ts line 127"],
    h: "5odppwzoA5bC5nAM3F+GDOVrAq3NfjGxrE0ZFXseCDg=",
  },
  "budget-file-type-name": {
    val: "Buckets Budget",
    translated: false,
    src: ["src/mainprocess/files.ts line 129"],
    h: "g2jeytcuhPOlEo6R2OlTzT3vNdE7sVWGnXuffEioq4c=",
  },
  "Buckets Budget Filename": {
    val: "Buckets Budget Filename",
    translated: false,
    src: ["src/mainprocess/files.ts line 143"],
    h: "PMqvee/qJsh/OYtRi+hbcH4fgl07SR6XM0wx4c1C+sU=",
  },
  "No file chosen": {
    val: "No file chosen",
    translated: false,
    src: ["src/mainprocess/files.ts line 149"],
    h: "MKsAG2u3PyHfYzTNB+XEA8Myeu1DiSU2HNpIW8QXTpc=",
  },
  "File": {
    val: "File",
    translated: false,
    src: ["src/mainprocess/menu.ts line 33"],
    h: "9XpUff7TtVQbIncvgmrfzVB2gkBh35RnM1ET/HFr3k0=",
  },
  "New Budget...": {
    val: "New Budget...",
    translated: false,
    src: ["src/mainprocess/menu.ts line 36","src/wwwroot/misc/wizard.html line 0"],
    h: "daxIu+dqn7pfUDeB26rLQnPnAz2v5opSTHbAyBovaoI=",
  },
  "Open Budget...": {
    val: "Open Budget...",
    translated: false,
    src: ["src/mainprocess/menu.ts line 43","src/wwwroot/misc/wizard.html line 0"],
    h: "67FfAce57aSIe2ncVfWeIeiiRLQQ8uuEUdDyI6UHxHU=",
  },
  "Open Recent...": {
    val: "Open Recent...",
    translated: false,
    src: ["src/mainprocess/menu.ts line 50"],
    h: "Uf1w3VIwUvsmKvOkQtBwsGvbRzQ5gMbEq/iyNzv95cs=",
  },
  "Duplicate Window": {
    val: "Duplicate Window",
    translated: false,
    src: ["src/mainprocess/menu.ts line 63"],
    h: "tjwFTBARBKQ5uC9Fh0zm7ag/RViV95pptJBJn9eVqHE=",
  },
  "Import Transactions...": {
    val: "Import Transactions...",
    translated: false,
    src: ["src/mainprocess/menu.ts line 72"],
    h: "PPLzf/61MKc3iWfDMTRo6ERH/TYu6TxBH2vmVbZD5Lk=",
  },
  "Find...": {
    val: "Find...",
    translated: false,
    src: ["src/mainprocess/menu.ts line 96"],
    h: "aUU1pzvlZzKNgYZP2ZpPtQMImBOStbFnK33P3YwXTNs=",
  },
  "Find Next": {
    val: "Find Next",
    translated: false,
    src: ["src/mainprocess/menu.ts line 103"],
    h: "LALfI5V4TsQo0DcGJwmNmrm3xNPtY5PmQuxB1voZo34=",
  },
  "Find Previous": {
    val: "Find Previous",
    translated: false,
    src: ["src/mainprocess/menu.ts line 110"],
    h: "0n6Dq5KDTxxsTAKrJE+RDdgi9ln6FyfUEPNBJ6ejZ5o=",
  },
  "View": {
    val: "View",
    translated: false,
    src: ["src/mainprocess/menu.ts line 119"],
    h: "paIseOhKCT2+NaUBPKk98vQB/lphf7jIGeERV77doDg=",
  },
  "Learn More": {
    val: "Learn More",
    translated: false,
    src: ["src/mainprocess/menu.ts line 144"],
    h: "8bk7nEyrz+Q0vmMisWIPVuvHR4/TeW4DhemALir6s1o=",
  },
  "Show Log Files...": {
    val: "Show Log Files...",
    translated: false,
    src: ["src/mainprocess/menu.ts line 148"],
    h: "In00T9z1A4xO6nLu8zAU5s3UzH3+IcK4XjRvrT9CGMs=",
  },
  "Report Bug...": {
    val: "Report Bug...",
    translated: false,
    src: ["src/mainprocess/menu.ts line 154"],
    h: "i17nG0QruMiCn612ogDToWB1g4xqqei691Yeh/t8MIk=",
  },
  "Chat...": {
    val: "Chat...",
    translated: false,
    src: ["src/mainprocess/menu.ts line 160"],
    h: "SytGirG0+cdtbPfjBma/G/tEOt4rdOj4mnjcaWsTbt8=",
  },
  "Getting Started...": {
    val: "Getting Started...",
    translated: false,
    src: ["src/mainprocess/menu.ts line 166"],
    h: "XD8GQYEIDrNjTMPX4TjGeAbbCIEBcAONlYPd/D8Hz84=",
  },
  "Purchase Full Version...": {
    val: "Purchase Full Version...",
    translated: false,
    src: ["src/mainprocess/menu.ts line 178"],
    h: "+6h2Y0QTHEVui0aUhwAlCsyJp/F+S0PYKMRlQysqjrk=",
  },
  "Enter License...": {
    val: "Enter License...",
    translated: false,
    src: ["src/mainprocess/menu.ts line 184"],
    h: "A+/eZ8qTAh97iBouJPInRkCg7F0nOkteYEBO7+lFHHA=",
  },
  "Check For Updates...": {
    val: "Check For Updates...",
    translated: false,
    src: ["src/mainprocess/menu.ts line 209"],
    h: "S/1p0syaOMqjAbHpmZa6gWaIh/9e29QR2cRJhiMadz0=",
  },
  "Speech": {
    val: "Speech",
    translated: false,
    src: ["src/mainprocess/menu.ts line 227"],
    h: "i4Qm95bH8zVEbjpkUi7jvQiLtDzGkW9z90XEkiglzHM=",
  },
  "Update Available": {
    val: "Update Available",
    translated: false,
    src: ["src/mainprocess/updater.ts line 159"],
    h: "FKOD6i3t69T8rvTwVJ5VSnLfkQPBcceuuk2X4ZsNKMY=",
  },
  "version-available": {
    val: (newv:string) => `Version ${newv} available.`,
    translated: false,
    src: ["src/mainprocess/updater.ts line 160","src/wwwroot/misc/updates.tsx line 32"],
    h: "YCoofx1v0tRUHkHfhFnm6bV2xXfnsNT6QAyXqgkUa9c=",
  },
  "Later": {
    val: "Later",
    translated: false,
    src: ["src/mainprocess/updater.ts line 161"],
    h: "wZUl6R8m08S1l0zLg0xgDG2XE1sodemTuRDbalIB4VM=",
  },
  "Download": {
    val: "Download",
    translated: false,
    src: ["src/mainprocess/updater.ts line 162"],
    h: "QVM3NKWnuJ19cWUaN3y9fVCbkiQTygWbOYuFMklAwNc=",
  },
  "Sync failed": {
    val: "Sync failed",
    translated: false,
    src: ["src/models/simplefin.ts line 159"],
    h: "jBGq60u/Y2WKAulnVvspUq9tLPFtXOnQYczjXXViGA0=",
  },
  "Invalid SimpleFIN Token": {
    val: "Invalid SimpleFIN Token",
    translated: false,
    src: ["src/models/simplefin.ts line 298"],
    h: "C6BzeT0S0G+xUVzgdubtVeH39oIVS4hUaVBd2gKS3Uo=",
  },
  "Unable to claim access token": {
    val: "Unable to claim access token",
    translated: false,
    src: ["src/models/simplefin.ts line 310"],
    h: "Gao95RuT9JvhdAoZ5winV9os7iMaPIex3Vq9CMSjhzs=",
  },
  "Error fetching data": {
    val: "Error fetching data",
    translated: false,
    src: ["src/models/simplefin.ts line 326"],
    h: "z94B0956dECmmaMVLZFW0oZMVtA92etw+2ZqumR4K9Q=",
  },
  "Error parsing response": {
    val: "Error parsing response",
    translated: false,
    src: ["src/models/simplefin.ts line 333"],
    h: "PsIRbom+m8Y5OIEPW2rzJYVlNA2NQrZmEQnpW7Y/9KI=",
  },
  "Enter Buckets License": {
    val: "Enter Buckets License",
    translated: false,
    src: ["src/wwwroot/misc/enter_license.html line 0"],
    h: "QPy/bCk+yTP2DzZAmXWbRYj2KC5QbrLq/XeXrysIX6Q=",
  },
  "enter-license-prompt": {
    val: "\n      Please enter your Buckets License below.  Don&apos;t have a license?  <a href=\"#\" id=\"clicktobuy\">Click here to purchase one.</a>\n    ",
    translated: false,
    src: ["src/wwwroot/misc/enter_license.html line 0"],
    h: "bQ5kF1mLhFNyrJzVhTf5Cz5lxO8mRww7nwMpeCy9HC8=",
  },
  "Submit": {
    val: "Submit",
    translated: false,
    src: ["src/wwwroot/misc/enter_license.html line 0"],
    h: "/plzMiu0xhKwtFcT4VqbJMoCd2dB03dB9EJhijEA284=",
  },
  "Success!": {
    val: "Success!",
    translated: false,
    src: ["src/wwwroot/misc/enter_license.tsx line 26"],
    h: "6NxF/uD6sOEPkEbPFOHdBKRxj0ZXVbmnPkRXNJDy0zs=",
  },
  "Restart Buckets": {
    val: "Restart Buckets",
    translated: false,
    src: ["src/wwwroot/misc/enter_license.tsx line 27"],
    h: "TNcYWk7YxhZ0U9Q+mFMRedeWB36VsDXoYgBapDvZCgM=",
  },
  "Invalid license": {
    val: "Invalid license",
    translated: false,
    src: ["src/wwwroot/misc/enter_license.tsx line 30"],
    h: "BfJdh6NOzurSCMGRmCP8gb1VAXUlrSSsCFIGHGXtNiA=",
  },
  "Buckets Updates": {
    val: "Buckets Updates",
    translated: false,
    src: ["src/wwwroot/misc/updates.html line 0"],
    h: "/bdGAwJm/rYxsxx+n8mZcZ2R8TvkVU+hfEC7Acda0nk=",
  },
  "Check for Updates": {
    val: "Check for Updates",
    translated: false,
    src: ["src/wwwroot/misc/updates.tsx line 21"],
    h: "6vtxqhyfiDaIXgTBH0pdoPzTGftDDEoRFNGU082PhRk=",
  },
  "Checking for updates...": {
    val: "Checking for updates...",
    translated: false,
    src: ["src/wwwroot/misc/updates.tsx line 27"],
    h: "wjjhyYhYEFdJWUmwdJIEdxm0iAq2bwrWU79ANObzzZY=",
  },
  "Download Update": {
    val: "Download Update",
    translated: false,
    src: ["src/wwwroot/misc/updates.tsx line 36"],
    h: "OvekDBh71chOkbTXqPs/V/x0lNbpc668s4hyXRF5G+I=",
  },
  "You are running the latest version!": {
    val: "You are running the latest version!",
    translated: false,
    src: ["src/wwwroot/misc/updates.tsx line 42"],
    h: "hShy87A6GAhRqqtK+8VdVeGD70zA64iiV0/SwectQ0I=",
  },
  "Downloading update...": {
    val: "Downloading update...",
    translated: false,
    src: ["src/wwwroot/misc/updates.tsx line 44"],
    h: "vTHXpZeFxjQhKPwUQPCm+eHcyYR6YjSmIm4mtV/5iTE=",
  },
  "Update downloaded.": {
    val: "Update downloaded.",
    translated: false,
    src: ["src/wwwroot/misc/updates.tsx line 49"],
    h: "DO2vE3TgW3xjiD8ZaOWeScL3qWCyiFPK8GENQ9NosYw=",
  },
  "Install and Relaunch Buckets": {
    val: "Install and Relaunch Buckets",
    translated: false,
    src: ["src/wwwroot/misc/updates.tsx line 53"],
    h: "bzusTDIT831mqEwmmM59eT12mfoNMYiGPbUfoIzaCwo=",
  },
  "There was an error.  Maybe try again?": {
    val: "There was an error.  Maybe try again?",
    translated: false,
    src: ["src/wwwroot/misc/updates.tsx line 62"],
    h: "l+W2GSV3tl8Gx19ZW+wOCziBj5/UeMCVO8tvh4P7LEo=",
  },
  "Recently used": {
    val: "Recently used",
    translated: false,
    src: ["src/wwwroot/misc/wizard.html line 0"],
    h: "tJ5cBjszrV/JztG5V1FUrgo0bfVgXfK5KB495TvGsYs=",
  },
}
