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
  "Reopen Account": IMsg<string>;
  "Reopen": IMsg<string>;
  "You have no closed accounts.": IMsg<string>;
  "Account": IMsg<string>;
  "accounts.balance_mismatch_msg": IMsg<string>;
  "accounts.name_placeholder": IMsg<string>;
  "Update Account Name": IMsg<string>;
  "Balance": IMsg<string>;
  "single-account Closed": IMsg<string>;
  "Delete Account": IMsg<string>;
  "Account and transactions deleted": IMsg<string>;
  "Permanently delete account": IMsg<string>;
  "Close Account": IMsg<string>;
  "Account deleted completely": IMsg<string>;
  "Account closed": IMsg<string>;
  "Close account": IMsg<string>;
  "Synced balance": IMsg<string>;
  "accounts.balance_mismatch_long_msg": IMsg<()=>string|JSX.Element>;
  "Update Account Balance": IMsg<string>;
  "balance-as-of": IMsg<(date:any)=>string|JSX.Element>;
  "getting-started-link": IMsg<(clickhandler:any)=>string|JSX.Element>;
  "New account": IMsg<string>;
  "Connect to bank": IMsg<string>;
  "Create Account": IMsg<string>;
  "default account name": IMsg<string>;
  "toast.updated-trans": IMsg<(count:any)=>string|JSX.Element>;
  "sync.toast.syncing": IMsg<(start:any,end:any)=>string|JSX.Element>;
  "Sync complete": IMsg<string>;
  "Account created: ": IMsg<string>;
  "Unknown account: ": IMsg<string>;
  "Un-kick Bucket": IMsg<string>;
  "Un-kick": IMsg<string>;
  "more": IMsg<string>;
  "You haven't kicked the bucket yet...": IMsg<string>;
  "Bucket": IMsg<string>;
  "In": IMsg<string>;
  "Out": IMsg<string>;
  "Net": IMsg<string>;
  "If Net is 0, the bucket transactions will be marked as transfers rather than as income or expenses.": IMsg<string>;
  "Rain left": IMsg<string>;
  "Make it so": IMsg<string>;
  "Warning: Doing this will use rain you don't have and could steal rain from future months (if available).": IMsg<string>;
  "Self debt": IMsg<string>;
  "Amount of money over-allocated in buckets.": IMsg<string>;
  "Need ideas for getting started?": IMsg<string>;
  "Start with a template": IMsg<string>;
  "Make it rain!": IMsg<string>;
  "action.New bucket": IMsg<string>;
  "action.New group": IMsg<string>;
  "Rain": IMsg<string>;
  "Total amount your buckets expect each month.": IMsg<string>;
  "New Bucket": IMsg<string>;
  "default new bucket name": IMsg<string>;
  "New Group": IMsg<string>;
  "default new group name": IMsg<string>;
  "Transactions": IMsg<string>;
  "Goal:": IMsg<string>;
  "Update Goal": IMsg<string>;
  "Target date:": IMsg<string>;
  "Update Target Date": IMsg<string>;
  "Monthly deposit:": IMsg<string>;
  "Update Monthly Deposit": IMsg<string>;
  "Bucket type:": IMsg<string>;
  "Update Bucket Type": IMsg<string>;
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
  "Transaction": IMsg<string>;
  "Update Color": IMsg<string>;
  "Update Bucket Name": IMsg<string>;
  "Move Bucket": IMsg<string>;
  "New bucket": IMsg<string>;
  "This is a special group for all the buckets without a group.": IMsg<string>;
  "Update Group Name": IMsg<string>;
  "Delete Group": IMsg<string>;
  "Move Group": IMsg<string>;
  "Want": IMsg<string>;
  "bucketrain.help": IMsg<string>;
  "Net transfers between buckets.": IMsg<string>;
  "Effective": IMsg<string>;
  "effective.help": IMsg<string>;
  "In/Out": IMsg<string>;
  "bucket.detailslabel": IMsg<string>;
  "misc group name": IMsg<string>;
  "single-bucket Kicked": IMsg<string>;
  "Kick Bucket": IMsg<string>;
  "Bucket deleted completely": IMsg<string>;
  "Kick the bucket": IMsg<string>;
  "Update Name": IMsg<string>;
  "Balance:": IMsg<string>;
  "Rainfall this month:": IMsg<string>;
  "Make Transfer": IMsg<string>;
  "Not Transfer": IMsg<string>;
  "Delete Transactions": IMsg<string>;
  "Posted": IMsg<string>;
  "Memo": IMsg<string>;
  "Amount": IMsg<string>;
  "noun.transfer": IMsg<string>;
  "bucket.transfer.help": IMsg<string>;
  "Misc": IMsg<string>;
  "Trial Version": IMsg<string>;
  "Accounts": IMsg<string>;
  "Closed": IMsg<string>;
  "Buckets": IMsg<string>;
  "Kicked": IMsg<string>;
  "Analysis": IMsg<string>;
  "Recurring Expenses": IMsg<string>;
  "Import": IMsg<string>;
  "Tools": IMsg<string>;
  "Search": IMsg<string>;
  "Export": IMsg<string>;
  "Chat with Matt": IMsg<string>;
  "Used in future": IMsg<string>;
  "rain.help.pos": IMsg<(abs_amount:any)=>string|JSX.Element>;
  "rain.help.neg": IMsg<(abs_amount:any)=>string|JSX.Element>;
  "Income": IMsg<string>;
  "Expenses": IMsg<string>;
  "months gain/loss label": IMsg<(gain:any)=>string|JSX.Element>;
  "in the bank": IMsg<string>;
  "I'm exporting data so that I can ": IMsg<string>;
  "daterange.all": IMsg<string>;
  "daterange.thismonth": IMsg<string>;
  "daterange.fromlastmonth": IMsg<string>;
  "daterange.from2monthsago": IMsg<string>;
  "daterange.from3monthsago": IMsg<string>;
  "export.why": IMsg<string>;
  "Thank you for the feedback!": IMsg<string>;
  "Submit feedback": IMsg<string>;
  "From": IMsg<string>;
  "To": IMsg<string>;
  "File saved: ": IMsg<string>;
  "match-count": IMsg<(current_match:number,total_matches:number)=>string|JSX.Element>;
  "Create Template": IMsg<string>;
  "Needs": IMsg<string>;
  "Charity": IMsg<string>;
  "Rent/Mortgage": IMsg<string>;
  "Groceries": IMsg<string>;
  "Fuel": IMsg<string>;
  "Phone": IMsg<string>;
  "Electricity": IMsg<string>;
  "Water": IMsg<string>;
  "Natural gas/propane/oil": IMsg<string>;
  "Medical": IMsg<string>;
  "Clothing": IMsg<string>;
  "Household goods": IMsg<string>;
  "Diapers": IMsg<string>;
  "Spending Money": IMsg<string>;
  "Babysitting": IMsg<string>;
  "Tuition": IMsg<string>;
  "Any other monthly bills you have?": IMsg<string>;
  "Debt": IMsg<string>;
  "Car Payment": IMsg<string>;
  "Student Loan Payment": IMsg<string>;
  "Personal Loan Payment": IMsg<string>;
  "Preparation": IMsg<string>;
  "Car Insurance": IMsg<string>;
  "Car Maintenance": IMsg<string>;
  "Life Insurance": IMsg<string>;
  "Health Insurance": IMsg<string>;
  "Year's Supply": IMsg<string>;
  "Wants": IMsg<string>;
  "Eating out": IMsg<string>;
  "Internet": IMsg<string>;
  "Cable TV": IMsg<string>;
  "Holidays": IMsg<string>;
  "Birthdays": IMsg<string>;
  "Vacation ": IMsg<string>;
  "New car": IMsg<string>;
  "New phone": IMsg<string>;
  "New computer": IMsg<string>;
  "New roof": IMsg<string>;
  "Sync": IMsg<string>;
  "Syncing...": IMsg<string>;
  "A sync is already in progress": IMsg<string>;
  "Error running sync": IMsg<string>;
  "Sync has not yet been set up.": IMsg<string>;
  "simplefin-connect-intro": IMsg<string>;
  "simplefin-get-token": IMsg<(mklink:any)=>string|JSX.Element>;
  "simplefin-paste": IMsg<string>;
  "Connecting...": IMsg<string>;
  "Unlinked Accounts": IMsg<string>;
  "Macros": IMsg<string>;
  "SimpleFIN Connections": IMsg<string>;
  "CSV Fields": IMsg<string>;
  "CSV Account": IMsg<string>;
  "Cancel sync": IMsg<string>;
  "Test Toast": IMsg<string>;
  "Create macro": IMsg<string>;
  "Connect": IMsg<string>;
  "Create Macro": IMsg<string>;
  "Connection saved!": IMsg<string>;
  "On": IMsg<string>;
  "When \"On\" this macro will be run during a normal sync.": IMsg<string>;
  "Name": IMsg<string>;
  "Enable Macro": IMsg<string>;
  "Disable Macro": IMsg<string>;
  "Update Macro Name": IMsg<string>;
  "Delete Macro": IMsg<string>;
  "Delete Connection": IMsg<string>;
  "ID": IMsg<string>;
  "Last used": IMsg<string>;
  "Description": IMsg<string>;
  "Create new account": IMsg<string>;
  "action.link-account": IMsg<string>;
  "Link Account": IMsg<string>;
  "Update Note": IMsg<string>;
  "press Escape to close": IMsg<string>;
  "Month to Month": IMsg<string>;
  "Year to Year": IMsg<string>;
  "Avg:": IMsg<string>;
  "Net Transfers": IMsg<string>;
  "net-transfers.help": IMsg<string>;
  "Tot:": IMsg<string>;
  "Gain/Loss": IMsg<string>;
  "Ending Balance": IMsg<string>;
  "Budgeted": IMsg<string>;
  "Average": IMsg<string>;
  "Months": IMsg<string>;
  "Years": IMsg<string>;
  "You don't have any recurring expense buckets yet.": IMsg<string>;
  "Note": IMsg<string>;
  "Account Transactions": IMsg<string>;
  "Bucket Transactions": IMsg<string>;
  "Nothing found matching:": IMsg<string>;
  "Searching...": IMsg<string>;
  "Search:": IMsg<string>;
  "No matches found": IMsg<string>;
  "Successfully imported Amazon Items report": IMsg<string>;
  "Successfully imported Amazon Orders report": IMsg<string>;
  "Successfully imported Amazon Refunds report": IMsg<string>;
  "Import Amazon Reports": IMsg<string>;
  "Amazon Reconciliation": IMsg<string>;
  "Amazon.com Reconciliation": IMsg<string>;
  "Possible Duplicates": IMsg<string>;
  "Show uncategorized": IMsg<string>;
  "Import file": IMsg<string>;
  "Category": IMsg<string>;
  "Update Transaction": IMsg<string>;
  "Create Transaction": IMsg<string>;
  "sync-symbol help": IMsg<string>;
  "Deposit": IMsg<string>;
  "Withdrawl": IMsg<string>;
  "Categorization": IMsg<string>;
  "Cancel": IMsg<string>;
  "Save": IMsg<string>;
  "noun.income": IMsg<string>;
  "noin.income": IMsg<string>;
  "Categorize": IMsg<string>;
  "Identify the data each column contains using the drop downs below.": IMsg<string>;
  "You must have at least one column each set to Amount, Memo and Date Posted.": IMsg<string>;
  "For Date Posted, you must also choose the date format.": IMsg<string>;
  "If multiple columns are selected for Amount, the first non-zero value will be used.  This is helpful if the CSV contains separate Credit and Debit columns.": IMsg<string>;
  "Only select a column for Unique ID if you are sure it contains bank-assigned, unique transaction IDs.  Most CSVs will not have this field.": IMsg<string>;
  "Click the \"Set mapping\" to continue.": IMsg<string>;
  "Date Posted": IMsg<string>;
  "Unique ID": IMsg<string>;
  "(optional)": IMsg<string>;
  "Set mapping": IMsg<string>;
  "Invalid": IMsg<string>;
  "Select the account these transactions belong to.": IMsg<string>;
  "edit.mapping": IMsg<(onClick:any)=>string|JSX.Element>;
  "Account name": IMsg<string>;
  "Provide a name for the new account.": IMsg<string>;
  "Finish import": IMsg<string>;
  "Error": IMsg<string>;
  "There has been an error.": IMsg<string>;
  "error-detail": IMsg<string>;
  "action.ignore": IMsg<string>;
  "action.chat": IMsg<string>;
  "action.report bug": IMsg<string>;
  "OK": IMsg<string>;
  "File type not recognized.": IMsg<string>;
  "Buckets License": IMsg<string>;
  "Unregistered Version": IMsg<string>;
  "Hello!  Thanks for trying out Buckets.": IMsg<string>;
  "nag-message": IMsg<()=>string|JSX.Element>;
  "Later": IMsg<string>;
  "Purchase": IMsg<string>;
  "Unable to open the file:": IMsg<string>;
  "Open Transaction File": IMsg<string>;
  "File does not exist:": IMsg<string>;
  "Open Buckets Budget": IMsg<string>;
  "budget-file-type-name": IMsg<string>;
  "Buckets Budget Filename": IMsg<string>;
  "No file chosen": IMsg<string>;
  "File": IMsg<string>;
  "New Budget...": IMsg<string>;
  "Open Budget...": IMsg<string>;
  "Open Recent...": IMsg<string>;
  "Undo": IMsg<string>;
  "Redo": IMsg<string>;
  "Edit": IMsg<string>;
  "Cut": IMsg<string>;
  "Copy": IMsg<string>;
  "Paste": IMsg<string>;
  "Paste and Match Style": IMsg<string>;
  "Delete": IMsg<string>;
  "Select All": IMsg<string>;
  "Find...": IMsg<string>;
  "Find Next": IMsg<string>;
  "Find Previous": IMsg<string>;
  "View": IMsg<string>;
  "Reload": IMsg<string>;
  "Force Reload": IMsg<string>;
  "Toggle Developer Tools": IMsg<string>;
  "Actual Size": IMsg<string>;
  "Zoom In": IMsg<string>;
  "Zoom Out": IMsg<string>;
  "Toggle Full Screen": IMsg<string>;
  "Window": IMsg<string>;
  "Minimize": IMsg<string>;
  "Close Window": IMsg<string>;
  "Budget": IMsg<string>;
  "Duplicate Window": IMsg<string>;
  "Import Transactions...": IMsg<string>;
  "Import From YNAB4...": IMsg<string>;
  "Help": IMsg<string>;
  "Learn More": IMsg<string>;
  "Getting Started...": IMsg<string>;
  "Buckets Guide": IMsg<string>;
  "Chat...": IMsg<string>;
  "Show Log Files...": IMsg<string>;
  "Report Bug...": IMsg<string>;
  "Report Translation Error...": IMsg<string>;
  "It says:": IMsg<string>;
  "It should say:": IMsg<string>;
  "Purchase Full Version...": IMsg<string>;
  "Enter License...": IMsg<string>;
  "About Buckets": IMsg<string>;
  "Check For Updates...": IMsg<string>;
  "Preferences...": IMsg<string>;
  "Quit Buckets": IMsg<string>;
  "Services": IMsg<string>;
  "Hide Buckets": IMsg<string>;
  "Hide Others": IMsg<string>;
  "Show All": IMsg<string>;
  "Speech": IMsg<string>;
  "Start Speaking": IMsg<string>;
  "Stop Speaking": IMsg<string>;
  "Zoom": IMsg<string>;
  "Bring All to Front": IMsg<string>;
  "Update Available": IMsg<string>;
  "version-available": IMsg<(newv:string)=>string|JSX.Element>;
  "Download": IMsg<string>;
  "Confirm password:": IMsg<string>;
  "Passwords did not match": IMsg<string>;
  "Create budget password:": IMsg<string>;
  "Sync failed": IMsg<string>;
  "Unexpected sync error": IMsg<string>;
  "Invalid SimpleFIN Token": IMsg<string>;
  "Unable to claim access token": IMsg<string>;
  "Error fetching data": IMsg<string>;
  "Error parsing response": IMsg<string>;
  "/mo": IMsg<string>;
  "Enter Buckets License": IMsg<string>;
  "enter-license-prompt": IMsg<string>;
  "Submit": IMsg<string>;
  "Success!": IMsg<string>;
  "Restart Buckets": IMsg<string>;
  "Invalid license": IMsg<string>;
  "Preferences": IMsg<string>;
  "Language:": IMsg<string>;
  "System Default": IMsg<string>;
  "Animation:": IMsg<string>;
  "(Restart Buckets for the change to take effect.)": IMsg<string>;
  "Prompt": IMsg<string>;
  "Report Bug": IMsg<string>;
  "Your email address:": IMsg<string>;
  "(If you want a response)": IMsg<string>;
  "Optional message:": IMsg<string>;
  "Include log file": IMsg<string>;
  "Screenshots:": IMsg<string>;
  "(Drop files or click)": IMsg<string>;
  "\n        Though filling out this form is preferrable, you can also email bugs@budgetwithbuckets.com\n      ": IMsg<string>;
  "Attached files are too large.": IMsg<string>;
  "Send Report": IMsg<string>;
  "Check for Updates": IMsg<string>;
  "There was an error.  Maybe try again?": IMsg<string>;
  "Checking for updates...": IMsg<string>;
  "Skip This Version": IMsg<string>;
  "Download Update": IMsg<string>;
  "You are running the latest version!": IMsg<string>;
  "Downloading update...": IMsg<string>;
  "Update downloaded.": IMsg<string>;
  "Install and Relaunch Buckets": IMsg<string>;
  "Recently used": IMsg<string>;
  "EXPERIMENTAL Buckets Macro Maker": IMsg<string>;
  "navigatestep": IMsg<(url:any)=>string|JSX.Element>;
  "off": IMsg<string>;
  "on": IMsg<string>;
  "Paused": IMsg<string>;
  "Recording": IMsg<string>;
  "Playing": IMsg<string>;
  "Delete all": IMsg<string>;
  "notify-downloaded-file": IMsg<(filename:any)=>string|JSX.Element>;
  "Step took too long": IMsg<string>;
  "Error running recording": IMsg<string>;
  "Open YNAB4 File": IMsg<string>;
  "Error importing": IMsg<string>;
}
export const DEFAULTS:IMessages = {
  "Reopen Account": {
    val: "Reopen Account",
    translated: false,
    src: ["src/budget/accounts.tsx line 30","src/budget/accounts.tsx line 133"],
    h: "KBv9ohpTpLSanhr/AFbKdJCA0VZ1iJ0THB53Hut00v4=",
  },
  "Reopen": {
    val: "Reopen",
    translated: false,
    src: ["src/budget/accounts.tsx line 32","src/budget/accounts.tsx line 135"],
    h: "5497b4yxPFO2M524tL0qmmNk47Qv/aca/7n0zMEeX/o=",
  },
  "You have no closed accounts.": {
    val: "You have no closed accounts.",
    translated: false,
    src: ["src/budget/accounts.tsx line 40"],
    h: "8BZG+UdW1Rrd/+2zFNv7SskiNpD6DtlNa8LwQulqX5s=",
  },
  "Account": {
    val: "Account",
    translated: false,
    src: ["src/budget/accounts.tsx line 47","src/budget/accounts.tsx line 102","src/budget/importpage.tsx line 458","src/budget/searchpage.tsx line 119","src/budget/searchpage.tsx line 143","src/budget/transactions.tsx line 215"],
    h: "ihCgI4A9UaFZ63kuiKXqFHoGsze2dYwzpgSVU0clMfQ=",
  },
  "accounts.balance_mismatch_msg": {
    val: "The most recent synced balance does not match the balance computed from transactions.  Click ... for more information.",
    translated: false,
    src: ["src/budget/accounts.tsx line 80"],
    h: "8xHas2SyXqC7roWhYQNIVhFVNvbvzMi6Y3mQce5sIbc=",
  },
  "accounts.name_placeholder": {
    val: "no name",
    translated: false,
    src: ["src/budget/accounts.tsx line 87","src/budget/accounts.tsx line 187"],
    h: "UwMHboI9q49SZQkwMN8ps9zBi6YOSdtwakjLJwudtyA=",
  },
  "Update Account Name": {
    val: "Update Account Name",
    translated: false,
    src: ["src/budget/accounts.tsx line 90","src/budget/accounts.tsx line 190"],
    h: "xcyLhnHNOTDgJsYGhaelbAmXYam4HWMfD5mQiTiZJ50=",
  },
  "Balance": {
    val: "Balance",
    translated: false,
    src: ["src/budget/accounts.tsx line 103","src/budget/accounts.tsx line 197","src/budget/buckets.tsx line 1049","src/budget/buckets.tsx line 1293","src/budget/transactions.tsx line 218"],
    h: "azvDWgVPY349dq4q8mbtpDhehRsFKYKNzMk/TcuOvEQ=",
  },
  "single-account Closed": {
    val: "Closed",
    translated: false,
    src: ["src/budget/accounts.tsx line 136"],
    h: "8pZrnvzAUQTJhDN/XX31DLvx0wIs1Ww3fV6pktEKEHs=",
  },
  "Delete Account": {
    val: "Delete Account",
    translated: false,
    src: ["src/budget/accounts.tsx line 140"],
    h: "zTJTocYLEbNVwJ0ojyPCB6M0JpGx6fe6AZHWtuVJv0M=",
  },
  "Account and transactions deleted": {
    val: "Account and transactions deleted",
    translated: false,
    src: ["src/budget/accounts.tsx line 143"],
    h: "iwS2+dAqfDOEtU5SUm1d1oPFTe0+JT5NCm4nH2SrglE=",
  },
  "Permanently delete account": {
    val: "Permanently delete account",
    translated: false,
    src: ["src/budget/accounts.tsx line 146"],
    h: "fcpAc/TcJr/ayfOjnYZmGo2BIga/mx8UyuwCbh2BRFg=",
  },
  "Close Account": {
    val: "Close Account",
    translated: false,
    src: ["src/budget/accounts.tsx line 152"],
    h: "qTJEf8mdhLx1bU9LZPYaTtrT8pMLqxemoL/YqbhjESI=",
  },
  "Account deleted completely": {
    val: "Account deleted completely",
    translated: false,
    src: ["src/budget/accounts.tsx line 157"],
    h: "LswJ+SxzkHRVy6+Et4Wga6r/Io1P6MBlTiwdjUAUj48=",
  },
  "Account closed": {
    val: "Account closed",
    translated: false,
    src: ["src/budget/accounts.tsx line 159"],
    h: "l9xs5wLKF3KIgunL1SJh9r9XDYpWkC7LYrL4KUUFm3M=",
  },
  "Close account": {
    val: "Close account",
    translated: false,
    src: ["src/budget/accounts.tsx line 162"],
    h: "7HdV8X8++teDNW33urE2eccDw3VLdSpvII89zC/sfu4=",
  },
  "Synced balance": {
    val: "Synced balance",
    translated: false,
    src: ["src/budget/accounts.tsx line 167"],
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
    src: ["src/budget/accounts.tsx line 172"],
    h: "wR5L88lhIXbxAVDXEZbN1lwbnZjYUBkAifA2KtAg8dM=",
  },
  "Update Account Balance": {
    val: "Update Account Balance",
    translated: false,
    src: ["src/budget/accounts.tsx line 206"],
    h: "iwKjdHzqHPwoupXiUwrVL1tX4QfO//taXOPXFVtWRVE=",
  },
  "balance-as-of": {
    val: (date:JSX.Element) => {
            return <span>as of {date}</span>
          },
    translated: false,
    src: ["src/budget/accounts.tsx line 208"],
    h: "zfEhD0nTmeclrDPBvF4YQvThWfdELzmW0m1T1UJNEKw=",
  },
  "getting-started-link": {
    val: (clickhandler) => {
          return <span>First time using Buckets?  Check out the <a href="#" onClick={clickhandler}>Getting Started Videos.</a></span>
        },
    translated: false,
    src: ["src/budget/accounts.tsx line 237"],
    h: "9NGQRvIxlAaOF9i+zWPXMFQubcY+5jtA7Td/lii16aM=",
  },
  "New account": {
    val: "New account",
    translated: false,
    src: ["src/budget/accounts.tsx line 248"],
    h: "MtAiANg7ugdeUiGmiGklfBPG4T1igh1iChKeC0Mdxnc=",
  },
  "Connect to bank": {
    val: "Connect to bank",
    translated: false,
    src: ["src/budget/accounts.tsx line 249"],
    h: "0T7eA3oFvMxyPIOAkMZ2rDpJxQVORgxrLqrDx87L1ZY=",
  },
  "Create Account": {
    val: "Create Account",
    translated: false,
    src: ["src/budget/accounts.tsx line 279","src/csvimport.tsx line 493"],
    h: "0N2I0sNdMLVk7zC9FqlNYoA1G6RDgQDvQErp/TjAnRA=",
  },
  "default account name": {
    val: "Savings",
    translated: false,
    src: ["src/budget/accounts.tsx line 280"],
    h: "zCYN8vtLT3Hhb9CbDDSL2xOOjqhzmmhMa5yWDTR7bCE=",
  },
  "toast.updated-trans": {
    val: count => `Updated/created ${count} transactions`,
    translated: false,
    src: ["src/budget/appstate.ts line 302"],
    h: "bBKDE3rQIV5P80cYEL6mkLmIvgxjzVHCIf3aFa+KtmU=",
  },
  "sync.toast.syncing": {
    val: (start:moment.Moment, end:moment.Moment) => {
        return `Syncing transactions from ${start.format('ll')} to ${end.format('ll')}`;
      },
    translated: false,
    src: ["src/budget/appstate.ts line 321"],
    h: "f7R9zSdK0q5+lZ8I9QRhiwN5ENKyWFnrmUG6Gltegfs=",
  },
  "Sync complete": {
    val: "Sync complete",
    translated: false,
    src: ["src/budget/appstate.ts line 339"],
    h: "e2VXpLTi1mhVSVqDkExwdM5j8PhfW0MHeOqBwabU4Zo=",
  },
  "Account created: ": {
    val: "Account created: ",
    translated: false,
    src: ["src/budget/appstate.ts line 385"],
    h: "AJEfsK8U+n7xnyBkG2FG3cmZZipr4kpQX5mgCZ0Qwi4=",
  },
  "Unknown account: ": {
    val: "Unknown account: ",
    translated: false,
    src: ["src/budget/appstate.ts line 439"],
    h: "1pPv2ePlW/PBrqgYgGCM3lU9qnmnbplR3AzSDDG4TLs=",
  },
  "Un-kick Bucket": {
    val: "Un-kick Bucket",
    translated: false,
    src: ["src/budget/buckets.tsx line 47","src/budget/buckets.tsx line 1112"],
    h: "7WOQPepkeOH+dwwSbEjomy0amoqY5JtvtlyCSG02c1Q=",
  },
  "Un-kick": {
    val: "Un-kick",
    translated: false,
    src: ["src/budget/buckets.tsx line 49","src/budget/buckets.tsx line 1114"],
    h: "P5Z1ij4jmS06jNOQiHymi+/D+uYJktoalTdw+AHGukM=",
  },
  "more": {
    val: "more",
    translated: false,
    src: ["src/budget/buckets.tsx line 51"],
    h: "uiqCMjSdL1TgDZHPNYXLnfN/yZq59+kDR/wKZSAP0hU=",
  },
  "You haven't kicked the bucket yet...": {
    val: "You haven't kicked the bucket yet...",
    translated: false,
    src: ["src/budget/buckets.tsx line 57"],
    h: "mtaAsLJ7BgWZcbIkRmZ4ZPSSRGXj6vJ2H8+diLhIba4=",
  },
  "Bucket": {
    val: "Bucket",
    translated: false,
    src: ["src/budget/buckets.tsx line 64","src/budget/reports.tsx line 609","src/budget/searchpage.tsx line 96","src/budget/searchpage.tsx line 172"],
    h: "APPSgbsmF5H9B7YIJDaPcEVh4T7ctWU+hxQv/eG1Dg0=",
  },
  "In": {
    val: "In",
    translated: false,
    src: ["src/budget/buckets.tsx line 103","src/budget/buckets.tsx line 1046"],
    h: "TcCPpYF7/U7vM5pPmpqvJipZt0WPk3A/vC7Ec8pfDvo=",
  },
  "Out": {
    val: "Out",
    translated: false,
    src: ["src/budget/buckets.tsx line 109","src/budget/buckets.tsx line 1047"],
    h: "v4Oj0CQx7cmHP4mcJsZX4xMTzMzeFS81XA9gU3qOFKU=",
  },
  "Net": {
    val: "Net",
    translated: false,
    src: ["src/budget/buckets.tsx line 121"],
    h: "QITdwYnhK1fVfALCDc6jQhY2jLIUBpPp0/bSHOX6p9M=",
  },
  "If Net is 0, the bucket transactions will be marked as transfers rather than as income or expenses.": {
    val: "If Net is 0, the bucket transactions will be marked as transfers rather than as income or expenses.",
    translated: false,
    src: ["src/budget/buckets.tsx line 121"],
    h: "/btREV6/jPJtrc1ERDwLUyJAowC8+v6gUB7bmJJYzT4=",
  },
  "Rain left": {
    val: "Rain left",
    translated: false,
    src: ["src/budget/buckets.tsx line 129"],
    h: "+xrBpD9ex3fqQgh+YuNxsFxWyrbE8G1236f81k2whuY=",
  },
  "Make it so": {
    val: "Make it so",
    translated: false,
    src: ["src/budget/buckets.tsx line 141","src/budget/buckets.tsx line 144","src/budget/buckets.tsx line 147"],
    h: "XRTIWjylWKAy5BW8/0C0rOSW5S1QC+CxmgmFfhi81pk=",
  },
  "Warning: Doing this will use rain you don't have and could steal rain from future months (if available).": {
    val: "Warning: Doing this will use rain you don't have and could steal rain from future months (if available).",
    translated: false,
    src: ["src/budget/buckets.tsx line 142"],
    h: "YR+S0SMnFz4+K5vpXrMzMfSaBE5mHBrhQTalzgI0/7U=",
  },
  "Self debt": {
    val: "Self debt",
    translated: false,
    src: ["src/budget/buckets.tsx line 170"],
    h: "zRWPLHqBTGcGqHHBHWdXpN2eOUUhRhvCyeAccFlR9Z4=",
  },
  "Amount of money over-allocated in buckets.": {
    val: "Amount of money over-allocated in buckets.",
    translated: false,
    src: ["src/budget/buckets.tsx line 170"],
    h: "kFucvPefN9Kae7dArnle8i0rTZZq1U+3d8w81lDNVKw=",
  },
  "Need ideas for getting started?": {
    val: "Need ideas for getting started?",
    translated: false,
    src: ["src/budget/buckets.tsx line 180"],
    h: "JLW3ar4riykgYXyTGeMCNqL+wes0evHH6RERa+qXPaw=",
  },
  "Start with a template": {
    val: "Start with a template",
    translated: false,
    src: ["src/budget/buckets.tsx line 182"],
    h: "HbSWD1rCMlssQIfvhdN+qwtdXT/k2Rq4+lTObtGpWbo=",
  },
  "Make it rain!": {
    val: "Make it rain!",
    translated: false,
    src: ["src/budget/buckets.tsx line 212"],
    h: "GCU3Hru9VCit7F+BYEMKmg5U8gsc1/UZ+o5wsbMAkeY=",
  },
  "action.New bucket": {
    val: "New bucket",
    translated: false,
    src: ["src/budget/buckets.tsx line 213"],
    h: "aIKjDQtVbUMjIHU/6fccfiWBUIwUBnAofdzRJTCuytI=",
  },
  "action.New group": {
    val: "New group",
    translated: false,
    src: ["src/budget/buckets.tsx line 214"],
    h: "054RU7JImk6Pavh27xHA9CgGIgjmP0dYIgXez2UWx34=",
  },
  "Rain": {
    val: "Rain",
    translated: false,
    src: ["src/budget/buckets.tsx line 217","src/budget/budget.tsx line 214","src/budget/budget.tsx line 237"],
    h: "fqeHyOaOYnCtGAcJlJbhAR37DG6YMrsasUNtiL6z8hc=",
  },
  "Total amount your buckets expect each month.": {
    val: "Total amount your buckets expect each month.",
    translated: false,
    src: ["src/budget/buckets.tsx line 217"],
    h: "UtK2gxh+N9D/p1G6dLyhcKMP5Df5XCyEp0jM0c+qoUw=",
  },
  "New Bucket": {
    val: "New Bucket",
    translated: false,
    src: ["src/budget/buckets.tsx line 251","src/budget/buckets.tsx line 929"],
    h: "FchHrB6weykpHiqRVxc5QKb6BEdhH4DXrc+t6RNcF8M=",
  },
  "default new bucket name": {
    val: "New Bucket",
    translated: false,
    src: ["src/budget/buckets.tsx line 252","src/budget/buckets.tsx line 930"],
    h: "FchHrB6weykpHiqRVxc5QKb6BEdhH4DXrc+t6RNcF8M=",
  },
  "New Group": {
    val: "New Group",
    translated: false,
    src: ["src/budget/buckets.tsx line 256"],
    h: "1dmXA/VlW+tjhojOGcypAy70L2wupHf9EdVjUByvpmA=",
  },
  "default new group name": {
    val: "New Group",
    translated: false,
    src: ["src/budget/buckets.tsx line 257"],
    h: "1dmXA/VlW+tjhojOGcypAy70L2wupHf9EdVjUByvpmA=",
  },
  "Transactions": {
    val: "Transactions",
    translated: false,
    src: ["src/budget/buckets.tsx line 296","src/budget/budget.tsx line 155","src/budget/exportpage.tsx line 147"],
    h: "4+yGUer/b71cfxTdeUa5QbonqN9ezC8Eii7KO22Ety0=",
  },
  "Goal:": {
    val: "Goal:",
    translated: false,
    src: ["src/budget/buckets.tsx line 409"],
    h: "77+E2dn/Mw53xjGhNc6irsiq1WULAiC4yIyt4NaO0DM=",
  },
  "Update Goal": {
    val: "Update Goal",
    translated: false,
    src: ["src/budget/buckets.tsx line 417"],
    h: "S3dt9ahT1yTXTCP2uHqiTMkyPUmAvAHvsCeGNa+NL1E=",
  },
  "Target date:": {
    val: "Target date:",
    translated: false,
    src: ["src/budget/buckets.tsx line 431"],
    h: "InmNQoNHlJkDpjvEB+J1XPqDWRqnfNIUwTQ86iNiOGc=",
  },
  "Update Target Date": {
    val: "Update Target Date",
    translated: false,
    src: ["src/budget/buckets.tsx line 439"],
    h: "SEac1rQopyHALPSWU85qYV3GE0x9i2OGDB+JYnVID8A=",
  },
  "Monthly deposit:": {
    val: "Monthly deposit:",
    translated: false,
    src: ["src/budget/buckets.tsx line 448"],
    h: "GKlnbgfjEkmlOI0TT0pyfI30T1/0jrXjT01JZrBTpP0=",
  },
  "Update Monthly Deposit": {
    val: "Update Monthly Deposit",
    translated: false,
    src: ["src/budget/buckets.tsx line 456"],
    h: "rFQ5lKjSNpQyyptg2Y+a4LQ6jwa1xWjKarMapXiD1/8=",
  },
  "Bucket type:": {
    val: "Bucket type:",
    translated: false,
    src: ["src/budget/buckets.tsx line 472"],
    h: "NMC+sjsH6UgNhNtiqYeiHDi4zDK/+S5h5yMfZ5CQk1c=",
  },
  "Update Bucket Type": {
    val: "Update Bucket Type",
    translated: false,
    src: ["src/budget/buckets.tsx line 478"],
    h: "wt5F9WSIpGlUsGaPnhSJlLYk0qraymNHDw0bYzbHlIE=",
  },
  "buckettype.plain": {
    val: "Plain old bucket",
    translated: false,
    src: ["src/budget/buckets.tsx line 481"],
    h: "AqvTaZK8lidyI8PZ9JXBBQABazz8uxM+uQM6iEuyO6w=",
  },
  "buckettype.deposit": {
    val: "Recurring expense",
    translated: false,
    src: ["src/budget/buckets.tsx line 482"],
    h: "3HXotB9ZHFm14ArdM0RfCT0merw8+KuXthbzotnPRec=",
  },
  "buckettype.goal-date": {
    val: "Save X by Y date",
    translated: false,
    src: ["src/budget/buckets.tsx line 483"],
    h: "+boZHIer4ggkvJ8A5cSl1EVyWRwKigC9UkBFn4WSEdg=",
  },
  "buckettype.goal-deposit": {
    val: "Save X by depositing Z/mo",
    translated: false,
    src: ["src/budget/buckets.tsx line 484"],
    h: "BUzPSZsbi+lN/3tb6eF63oa7CEzS94r6ee5jf5G7inA=",
  },
  "buckettype.deposit-date": {
    val: "Save Z/mo until Y date",
    translated: false,
    src: ["src/budget/buckets.tsx line 485"],
    h: "zdWdEX9eN5qpFDboBF+wi9EIguwYsB9nQCzN9GjrxMc=",
  },
  "Goal completion:": {
    val: "Goal completion:",
    translated: false,
    src: ["src/budget/buckets.tsx line 498"],
    h: "v+G5gj6B+MtHwQovNmj/BWbpnQncARZGo+swhE1fbtg=",
  },
  "some day...": {
    val: "some day...",
    translated: false,
    src: ["src/budget/buckets.tsx line 500"],
    h: "4K+3SY48UwcktULX4xiGt6J8Q8Hys3JjUR3t62WI6mo=",
  },
  "Required deposit:": {
    val: "Required deposit:",
    translated: false,
    src: ["src/budget/buckets.tsx line 509"],
    h: "Q34JZduUI2Lx8xxjkeH/Md92nqWgEcbPFZjgf5m7tXA=",
  },
  "Ending amount:": {
    val: "Ending amount:",
    translated: false,
    src: ["src/budget/buckets.tsx line 521"],
    h: "0IUvXk9nogxjdL1n0VZPrxcMOUZODNXMlGrlpyXq8bI=",
  },
  "Goal: 0": {
    val: "Goal: 0",
    translated: false,
    src: ["src/budget/buckets.tsx line 543"],
    h: "rtvJnJFYA7lHYjPjGpF27/h2So3pRdrRLjfnkg78woQ=",
  },
  "Transaction": {
    val: "Transaction",
    translated: false,
    src: ["src/budget/buckets.tsx line 607"],
    h: "G0gRZS6Zq1VoQqtY+L8fY3ogdqSl/OAoTurOZ4L480Q=",
  },
  "Update Color": {
    val: "Update Color",
    translated: false,
    src: ["src/budget/buckets.tsx line 671","src/budget/buckets.tsx line 1168"],
    h: "6QBa9YrDFsWCiiS/PMj7r+cTmIgMmmqjTnv9x4l90ic=",
  },
  "Update Bucket Name": {
    val: "Update Bucket Name",
    translated: false,
    src: ["src/budget/buckets.tsx line 684"],
    h: "Oa+1EZtc4RTtPYyk5LflMMlQq/esZ3qvTgbSLiKIl4E=",
  },
  "Move Bucket": {
    val: "Move Bucket",
    translated: false,
    src: ["src/budget/buckets.tsx line 764","src/budget/buckets.tsx line 962"],
    h: "6lJYNJMplvVHQuXlFYBD81+4kgQQb1SwZ0s13hvlIfI=",
  },
  "New bucket": {
    val: "New bucket",
    translated: false,
    src: ["src/budget/buckets.tsx line 876"],
    h: "aIKjDQtVbUMjIHU/6fccfiWBUIwUBnAofdzRJTCuytI=",
  },
  "This is a special group for all the buckets without a group.": {
    val: "This is a special group for all the buckets without a group.",
    translated: false,
    src: ["src/budget/buckets.tsx line 881"],
    h: "QP5fEqFwlvHWJyjzrIWUJFlMvhFDxxSsl1vnej/p30I=",
  },
  "Update Group Name": {
    val: "Update Group Name",
    translated: false,
    src: ["src/budget/buckets.tsx line 886"],
    h: "/pmHZLX1mkRHtus8eVyojidhAUe6BocaSkf5dGoIrSM=",
  },
  "Delete Group": {
    val: "Delete Group",
    translated: false,
    src: ["src/budget/buckets.tsx line 916"],
    h: "VaefOk8g8N64N+Td8TEorhhMQBe0AuWmfRz7u7+Q1Ko=",
  },
  "Move Group": {
    val: "Move Group",
    translated: false,
    src: ["src/budget/buckets.tsx line 956"],
    h: "zSmn/C+X/cbh/GqqDMPetNfBb8iTmlwFh9Dsbc9qe9k=",
  },
  "Want": {
    val: "Want",
    translated: false,
    src: ["src/budget/buckets.tsx line 1045"],
    h: "lV/eDqkplJ/XKjHyCSE47yOWOl3t3Igj9S559wDKMZI=",
  },
  "bucketrain.help": {
    val: "This is how much money these buckets want each month.  The little box indicates how much they have received.",
    translated: false,
    src: ["src/budget/buckets.tsx line 1045"],
    h: "3dbOFkUiGaEoD01CP7kIWDQHgUbULWexjdEKdEAF3sA=",
  },
  "Net transfers between buckets.": {
    val: "Net transfers between buckets.",
    translated: false,
    src: ["src/budget/buckets.tsx line 1048"],
    h: "wRxoqvIxh/1UVZNHs+kwKhCJbdg0R5FFPaTVeHEEK3Y=",
  },
  "Effective": {
    val: "Effective",
    translated: false,
    src: ["src/budget/buckets.tsx line 1050"],
    h: "Iu58QrugjAc/VqZhXc0aKtmSC8KziRWTzVTiliXpAL0=",
  },
  "effective.help": {
    val: "This would be the balance if no buckets were in debt.",
    translated: false,
    src: ["src/budget/buckets.tsx line 1050"],
    h: "D6V8nTUoyPCGCdFMHiUFZiACXp8Lpz5MFDbiujAlfSc=",
  },
  "In/Out": {
    val: "In/Out",
    translated: false,
    src: ["src/budget/buckets.tsx line 1051"],
    h: "G/e+QHikQOjTM9bcDBrmUZj6ONRstDFt17sNXu9zUd8=",
  },
  "bucket.detailslabel": {
    val: "Details",
    translated: false,
    src: ["src/budget/buckets.tsx line 1052"],
    h: "68e/QPEuI36iIEcTWmKDrVU9KBReQ3EjFzF1F06KQMA=",
  },
  "misc group name": {
    val: "Misc",
    translated: false,
    src: ["src/budget/buckets.tsx line 1076"],
    h: "DPoc7CIbzLHJxuar3WnaidO3Ryy1QtYkCswRzVHtVBg=",
  },
  "single-bucket Kicked": {
    val: "Kicked",
    translated: false,
    src: ["src/budget/buckets.tsx line 1108"],
    h: "cWApfoLlcBvoHizIFtrDQq3uwrZIYMXKO1iLMvv8szI=",
  },
  "Kick Bucket": {
    val: "Kick Bucket",
    translated: false,
    src: ["src/budget/buckets.tsx line 1120"],
    h: "3hmOuv1hNsjpQJ5cSDTlSqN4jGOGFnSPw9r0bK68RWY=",
  },
  "Bucket deleted completely": {
    val: "Bucket deleted completely",
    translated: false,
    src: ["src/budget/buckets.tsx line 1125"],
    h: "gBMlSFTWDRRSWZeZ3fuxDhpJnhv2MoF3EvZSwo1BZHg=",
  },
  "Kick the bucket": {
    val: "Kick the bucket",
    translated: false,
    src: ["src/budget/buckets.tsx line 1128"],
    h: "IvzeGJ9G+Rns8Rbnal26flTFzd+yBNSEBQSptdNy8t8=",
  },
  "Update Name": {
    val: "Update Name",
    translated: false,
    src: ["src/budget/buckets.tsx line 1176"],
    h: "fTqm8NUcvzaYHnGFDmVhLePEd/TFNPhUDzSYIIerjNc=",
  },
  "Balance:": {
    val: "Balance:",
    translated: false,
    src: ["src/budget/buckets.tsx line 1181"],
    h: "hHHAAGXs0oscbD5jkMQSQUQ5sLsgo/sPaBumUBAq+CA=",
  },
  "Rainfall this month:": {
    val: "Rainfall this month:",
    translated: false,
    src: ["src/budget/buckets.tsx line 1182"],
    h: "S6dFwRYAFyRMUh4i6My2aNacGwMh8taa7neVTx9aiAM=",
  },
  "Make Transfer": {
    val: "Make Transfer",
    translated: false,
    src: ["src/budget/buckets.tsx line 1254"],
    h: "Rmor5ffKqQTdDQSwA2x/hHhrr0zL7MceXGsR1vHe6b4=",
  },
  "Not Transfer": {
    val: "Not Transfer",
    translated: false,
    src: ["src/budget/buckets.tsx line 1254"],
    h: "GJsf5+RmvoXTk3dewQIb90+6xb+mujI/mpSM8cmgUEI=",
  },
  "Delete Transactions": {
    val: "Delete Transactions",
    translated: false,
    src: ["src/budget/buckets.tsx line 1277","src/budget/transactions.tsx line 201"],
    h: "5rAWRNk97CWy9OfDP5IWSE/T2Ao461w7C3z/IDV154I=",
  },
  "Posted": {
    val: "Posted",
    translated: false,
    src: ["src/budget/buckets.tsx line 1290","src/budget/searchpage.tsx line 142","src/budget/searchpage.tsx line 171","src/budget/transactions.tsx line 214","src/csvimport.tsx line 507"],
    h: "h6jjM8ytGdEj+QfDnTVzEdq+0oLSE9zd+MArY7gtjzU=",
  },
  "Memo": {
    val: "Memo",
    translated: false,
    src: ["src/budget/buckets.tsx line 1291","src/budget/searchpage.tsx line 144","src/budget/searchpage.tsx line 173","src/budget/transactions.tsx line 216","src/csvimport.tsx line 337","src/csvimport.tsx line 508"],
    h: "9yClwoAwAV0+DXl8NnkkAnlUi+Ebp2soPwN5meYKgWY=",
  },
  "Amount": {
    val: "Amount",
    translated: false,
    src: ["src/budget/buckets.tsx line 1292","src/budget/searchpage.tsx line 145","src/budget/searchpage.tsx line 174","src/budget/transactions.tsx line 217","src/csvimport.tsx line 336","src/csvimport.tsx line 509"],
    h: "DHNNaJF4hWTWIFdaMdMhUT4aSdti7ZfaNexABzxWWzc=",
  },
  "noun.transfer": {
    val: "Transfer",
    translated: false,
    src: ["src/budget/buckets.tsx line 1294","src/budget/transactions.tsx line 648","src/budget/transactions.tsx line 664"],
    h: "B5GGqjnE8KOjYJjhsFV7zs5TGmGmVPqjihzMVxHJ3sI=",
  },
  "bucket.transfer.help": {
    val: "A transfer is a transaction from one bucket to another.  If the transaction isn't income or an expense, it's likely a transfer.",
    translated: false,
    src: ["src/budget/buckets.tsx line 1294"],
    h: "dh5nslkaB1wNR4tJ5zAn6Hms+9oJqBDmAIR5k6WE6iY=",
  },
  "Misc": {
    val: "Misc",
    translated: false,
    src: ["src/budget/buckets.tsx line 1295"],
    h: "DPoc7CIbzLHJxuar3WnaidO3Ryy1QtYkCswRzVHtVBg=",
  },
  "Trial Version": {
    val: "Trial Version",
    translated: false,
    src: ["src/budget/budget.tsx line 123","src/mainprocess/menu.ts line 291"],
    h: "GtZIXrHILA84HlpKlxi3BErHwR7WIYkQ/e5BE0Fiaxg=",
  },
  "Accounts": {
    val: "Accounts",
    translated: false,
    src: ["src/budget/budget.tsx line 151","src/budget/budget.tsx line 218","src/budget/searchpage.tsx line 115"],
    h: "1oHDkv2zB1yiCABVTWBY5oX4Ccu36nJBCG7Q+JVg8TA=",
  },
  "Closed": {
    val: "Closed",
    translated: false,
    src: ["src/budget/budget.tsx line 153"],
    h: "8pZrnvzAUQTJhDN/XX31DLvx0wIs1Ww3fV6pktEKEHs=",
  },
  "Buckets": {
    val: "Buckets",
    translated: false,
    src: ["src/budget/budget.tsx line 156","src/budget/budget.tsx line 223","src/budget/searchpage.tsx line 92"],
    h: "fMPIWzGvVEG0t7+bZX1ucgzulk8FaQfqioLgwLsj+oE=",
  },
  "Kicked": {
    val: "Kicked",
    translated: false,
    src: ["src/budget/budget.tsx line 158"],
    h: "cWApfoLlcBvoHizIFtrDQq3uwrZIYMXKO1iLMvv8szI=",
  },
  "Analysis": {
    val: "Analysis",
    translated: false,
    src: ["src/budget/budget.tsx line 160"],
    h: "+LNAOPSLW2rpFCrT+U1suhdnoYyZa1k8ALddRlddDlI=",
  },
  "Recurring Expenses": {
    val: "Recurring Expenses",
    translated: false,
    src: ["src/budget/budget.tsx line 163","src/budget/reports.tsx line 605"],
    h: "yDp5Agru+QzDSy583s3kjOdZbbe6X1WDfMeSNXsYlaY=",
  },
  "Import": {
    val: "Import",
    translated: false,
    src: ["src/budget/budget.tsx line 166"],
    h: "F3sijvfYz3oB4iz2rVHjUvNDLQs43MbXDVIr5VFA2/c=",
  },
  "Tools": {
    val: "Tools",
    translated: false,
    src: ["src/budget/budget.tsx line 167"],
    h: "mPsch0seV0ZNaU+41My/wS+DkAGfYqzWpPlJpfT1sBs=",
  },
  "Search": {
    val: "Search",
    translated: false,
    src: ["src/budget/budget.tsx line 170"],
    h: "vembE+Cp1aKCKR2j2LCJD29QyiQxfGPUcGI1I8l5/5Y=",
  },
  "Export": {
    val: "Export",
    translated: false,
    src: ["src/budget/budget.tsx line 171","src/budget/exportpage.tsx line 97"],
    h: "mZJs0iE089tMZ5BWqTUBp+2aJ90wKL4act4hUPt7zkA=",
  },
  "Chat with Matt": {
    val: "Chat with Matt",
    translated: false,
    src: ["src/budget/budget.tsx line 177"],
    h: "9nQjbkjkf8l2mX6xeNaU///NYhxxWFqnvTKOmakMmRY=",
  },
  "Used in future": {
    val: "Used in future",
    translated: false,
    src: ["src/budget/budget.tsx line 228"],
    h: "O0zGsqv23d44/pWJqCSt+qkDtG/nBrBI2W0aRA9XoDw=",
  },
  "rain.help.pos": {
    val: (abs_amount:JSX.Element) => {
                                      return <span>
                                      You have {abs_amount} left to put into buckets.
                                      </span>
                                    },
    translated: false,
    src: ["src/budget/budget.tsx line 244"],
    h: "boezbSGkVm3dnfFvodJOAeCgAEMIQN9L+8TwEHLpU/o=",
  },
  "rain.help.neg": {
    val: (abs_amount:JSX.Element) => {
                                      return <span>
                                      You have put {abs_amount} too much money into buckets.  If all transactions have been categorized this month, remove {abs_amount} from buckets of your choosing.
                                      </span>
                                    },
    translated: false,
    src: ["src/budget/budget.tsx line 249"],
    h: "tqXmJxZXqyA0mN/8ugZkpCyspyO7XlPnGlEYGWgQ7jk=",
  },
  "Income": {
    val: "Income",
    translated: false,
    src: ["src/budget/budget.tsx line 264","src/budget/reports.tsx line 213"],
    h: "D2fJbta5d1Z5QYuRC5zzkBHsItZOOgY4FKrFJ64BvRs=",
  },
  "Expenses": {
    val: "Expenses",
    translated: false,
    src: ["src/budget/budget.tsx line 269","src/budget/reports.tsx line 224"],
    h: "d6aKytFAPwPUzFOv41R0itfcMu11VdE29vkM05dnpBU=",
  },
  "months gain/loss label": {
    val: (gain) => {
                        return gain >= 0 ? "Month's gain" : "Month's loss";
                      },
    translated: false,
    src: ["src/budget/budget.tsx line 274"],
    h: "lGcEnJfZJau2h5ohbKNxY1FjL0vJoW3oJOJQwSCt+Kg=",
  },
  "in the bank": {
    val: "in the bank",
    translated: false,
    src: ["src/budget/budget.tsx line 280"],
    h: "7gl7ZdgJ3HfhOcQMiU7hVkFpXIR3KFxXtlMhKyE/Irw=",
  },
  "I'm exporting data so that I can ": {
    val: "I'm exporting data so that I can ",
    translated: false,
    src: ["src/budget/exportpage.tsx line 24"],
    h: "I5s/a+WZelEoEbDU6z2RwMHJGBkfJJ7zZEZcw89IBck=",
  },
  "daterange.all": {
    val: "All time",
    translated: false,
    src: ["src/budget/exportpage.tsx line 42"],
    h: "Fz1lBhxlewLJ5bSKTiIzzaW3CAtAPxkUWWKU0BVqgAA=",
  },
  "daterange.thismonth": {
    val: "This month",
    translated: false,
    src: ["src/budget/exportpage.tsx line 47"],
    h: "jqSPxB9W3Xqmvb/7MIrwKgcCTUR0zgU3qqTqJFET1e0=",
  },
  "daterange.fromlastmonth": {
    val: "From last month",
    translated: false,
    src: ["src/budget/exportpage.tsx line 52"],
    h: "tIBgx9VgMgV21a9XhH7L7TIe/PfdgcW3fdfGaGOeVMo=",
  },
  "daterange.from2monthsago": {
    val: "From 2 months ago",
    translated: false,
    src: ["src/budget/exportpage.tsx line 57"],
    h: "zb4vtJXSL+UcXZTjSbkQueS8khVvJO2MDoFKKPuuDPM=",
  },
  "daterange.from3monthsago": {
    val: "From 3 months ago",
    translated: false,
    src: ["src/budget/exportpage.tsx line 62"],
    h: "4957XI6fjMtXcCqj3IRSUSQzX4ZlEucDTuwgu2krTLw=",
  },
  "export.why": {
    val: "Perhaps what you're doing with exported data could be built into Buckets.  Mind sending a note?",
    translated: false,
    src: ["src/budget/exportpage.tsx line 70"],
    h: "mv9GxRVjWShYHYo8kb/wvNU8eEYBGE2QtfUTxTsdP0I=",
  },
  "Thank you for the feedback!": {
    val: "Thank you for the feedback!",
    translated: false,
    src: ["src/budget/exportpage.tsx line 88"],
    h: "8bEPNAScct0pvqY775nF665zylB3/fKo1h3MqoWzXIQ=",
  },
  "Submit feedback": {
    val: "Submit feedback",
    translated: false,
    src: ["src/budget/exportpage.tsx line 94"],
    h: "ksa09D0YEXUycx+K+ZODvbWRCP78R2W7ClHhOaX4LmM=",
  },
  "From": {
    val: "From",
    translated: false,
    src: ["src/budget/exportpage.tsx line 101"],
    h: "cCFAY2/zl3pq5fMwrP/2LBsrrL36SYzS+6in7mvWyvY=",
  },
  "To": {
    val: "To",
    translated: false,
    src: ["src/budget/exportpage.tsx line 118"],
    h: "syFKIORaeu0FezL85oAbo76XXa8k7bxITMbNowi8ba0=",
  },
  "File saved: ": {
    val: "File saved: ",
    translated: false,
    src: ["src/budget/exportpage.tsx line 142"],
    h: "e6UDV8UzF5qqysQpN3OrcspjD8zPNn72zKd1CH1lFe8=",
  },
  "match-count": {
    val: (current_match:number, total_matches:number) => {
        return `${current_match} of ${total_matches}`;
      },
    translated: false,
    src: ["src/budget/finding.tsx line 129"],
    h: "gGpkwXhLiDpxY0YOCXAFl6Q8D6sb7BX93TqgFRObOqo=",
  },
  "Create Template": {
    val: "Create Template",
    translated: false,
    src: ["src/budget/gettingstarted.ts line 7"],
    h: "gAbtUL3vhxk+yCSp7fzAF4Z9tV0I4x7Uq5xDJ4nm2Uk=",
  },
  "Needs": {
    val: "Needs",
    translated: false,
    src: ["src/budget/gettingstarted.ts line 11"],
    h: "RbGrwaVYaT8OdEbNo5YBRWxoGZNYzZKjiDz7JrZVuuc=",
  },
  "Charity": {
    val: "Charity",
    translated: false,
    src: ["src/budget/gettingstarted.ts line 14"],
    h: "5OqY1JRI3brWCHQyu9VDY9hpjXzg1cVB1oQnXLQjZ4U=",
  },
  "Rent/Mortgage": {
    val: "Rent/Mortgage",
    translated: false,
    src: ["src/budget/gettingstarted.ts line 18"],
    h: "sCLO0xIawRUzVC3QV8aqowoCCfwYNvtXW848jCLfT10=",
  },
  "Groceries": {
    val: "Groceries",
    translated: false,
    src: ["src/budget/gettingstarted.ts line 22"],
    h: "T6Kz6/FDxQkeIUJq8SVGn0T7OPdZ7B0YjPD3qHqW5p4=",
  },
  "Fuel": {
    val: "Fuel",
    translated: false,
    src: ["src/budget/gettingstarted.ts line 26"],
    h: "lU9dO2a3oisfgHqd0n39sKC/wl7ymSV/XprtLhQLEiI=",
  },
  "Phone": {
    val: "Phone",
    translated: false,
    src: ["src/budget/gettingstarted.ts line 30"],
    h: "9WrpirmkhUIuWq47S+FrVpJP+prT4uInaMOfMHjxS8c=",
  },
  "Electricity": {
    val: "Electricity",
    translated: false,
    src: ["src/budget/gettingstarted.ts line 34"],
    h: "D85G++Fy1hUUGZfHiKAUcNRlXmLcdkKK7RtxnwJ110U=",
  },
  "Water": {
    val: "Water",
    translated: false,
    src: ["src/budget/gettingstarted.ts line 38"],
    h: "BOL+IhrDsm6ooEqGpFPieQoyXrWpV6LvKh0DvkAJ2bw=",
  },
  "Natural gas/propane/oil": {
    val: "Natural gas/propane/oil",
    translated: false,
    src: ["src/budget/gettingstarted.ts line 42"],
    h: "CMjkKDPUYAAymOaPiz0PkXS6Ec3BTRWuNZJQ34kHA5s=",
  },
  "Medical": {
    val: "Medical",
    translated: false,
    src: ["src/budget/gettingstarted.ts line 46"],
    h: "TcuCD6n7/CmRm/jdGZQLDvEdAVaJ2cDy2CahpUk9pCQ=",
  },
  "Clothing": {
    val: "Clothing",
    translated: false,
    src: ["src/budget/gettingstarted.ts line 50"],
    h: "as4CQmPu3VF2LxSvA5djgiAPatdFRqwmOt0NiHJCe7E=",
  },
  "Household goods": {
    val: "Household goods",
    translated: false,
    src: ["src/budget/gettingstarted.ts line 54"],
    h: "UK1mJCSwg2XnGpH47pKFFD8NlrCfcd3bQb1bJt2RXEg=",
  },
  "Diapers": {
    val: "Diapers",
    translated: false,
    src: ["src/budget/gettingstarted.ts line 58"],
    h: "Vr53xwIeHjIIuMymcxrQ3l1RsDE6ra+ZTFT4dbR/rlI=",
  },
  "Spending Money": {
    val: "Spending Money",
    translated: false,
    src: ["src/budget/gettingstarted.ts line 62"],
    h: "7mLvCPVxhYqWXYW8EcSN4N6vyUtQqT4PnR0iC1ucTtY=",
  },
  "Babysitting": {
    val: "Babysitting",
    translated: false,
    src: ["src/budget/gettingstarted.ts line 66"],
    h: "yOfOnHbye/Uhao1fb5jtfP4z0XPyc757kdBFt32Uwrc=",
  },
  "Tuition": {
    val: "Tuition",
    translated: false,
    src: ["src/budget/gettingstarted.ts line 70"],
    h: "UpDg7j7/mXJnP7WdFJe4hMlLw2XtH7X3Cj669aLHzec=",
  },
  "Any other monthly bills you have?": {
    val: "Any other monthly bills you have?",
    translated: false,
    src: ["src/budget/gettingstarted.ts line 76"],
    h: "rmA9D10bvYOVj3U4kE7U6jALpz7WpqBJTv6HZaI4T/M=",
  },
  "Debt": {
    val: "Debt",
    translated: false,
    src: ["src/budget/gettingstarted.ts line 82"],
    h: "y9kslXhW17gMMFZ9Dq8g/tabfINzlmzT+39QNbWiWGA=",
  },
  "Car Payment": {
    val: "Car Payment",
    translated: false,
    src: ["src/budget/gettingstarted.ts line 85"],
    h: "wp49ZoinRgifzKQ+N9RrJ6LG/9Yw6hkw1RCwXwHc6tA=",
  },
  "Student Loan Payment": {
    val: "Student Loan Payment",
    translated: false,
    src: ["src/budget/gettingstarted.ts line 89"],
    h: "j83e9PkiJgq0J5iPOaku/mbjw9H3KtXBaDV4ntsQktk=",
  },
  "Personal Loan Payment": {
    val: "Personal Loan Payment",
    translated: false,
    src: ["src/budget/gettingstarted.ts line 93"],
    h: "cL5KAz7DWc3XTzI4eo3t1PaGUe16WM+dKBg2ykfpQ6A=",
  },
  "Preparation": {
    val: "Preparation",
    translated: false,
    src: ["src/budget/gettingstarted.ts line 99"],
    h: "hAU2jJdFn2hdOUvG6S3yousGGeHnblb2/CsaRHWvQwQ=",
  },
  "Car Insurance": {
    val: "Car Insurance",
    translated: false,
    src: ["src/budget/gettingstarted.ts line 102"],
    h: "x3xbGNEH/vHcpYAm2HXTUhRRuz2sb6yfH0gBYFFkqc4=",
  },
  "Car Maintenance": {
    val: "Car Maintenance",
    translated: false,
    src: ["src/budget/gettingstarted.ts line 106"],
    h: "Lsok3+kX1L7SXMumFWNo+oxBgfmGJcWg1CdSDw6byx8=",
  },
  "Life Insurance": {
    val: "Life Insurance",
    translated: false,
    src: ["src/budget/gettingstarted.ts line 110"],
    h: "CafgTI2ogIOqH6sg0xYnwgpDXmZ5SZQAsRY2jlTsp9c=",
  },
  "Health Insurance": {
    val: "Health Insurance",
    translated: false,
    src: ["src/budget/gettingstarted.ts line 114"],
    h: "nsWIG2Kbb9OtoQkBvgkFh5MfMVNfbuGKhZypQ3uoQJw=",
  },
  "Year's Supply": {
    val: "Year's Supply",
    translated: false,
    src: ["src/budget/gettingstarted.ts line 118"],
    h: "E5VfnhjiYed/e2Ezg+RdChSIz6cjwl9oyRzpO1rjl0I=",
  },
  "Wants": {
    val: "Wants",
    translated: false,
    src: ["src/budget/gettingstarted.ts line 126"],
    h: "AOckwUko9CT2K8gxtu/GHFhjivPPgTDgQSjCNSujUV4=",
  },
  "Eating out": {
    val: "Eating out",
    translated: false,
    src: ["src/budget/gettingstarted.ts line 129"],
    h: "aiQggrM+Wb8WtkoJykeSDnNiCBgzGqVGc1Hvkf5Uzg8=",
  },
  "Internet": {
    val: "Internet",
    translated: false,
    src: ["src/budget/gettingstarted.ts line 133"],
    h: "LUwTAW8PsV34HKGrTUopI7v3NFK8iWKpv5Nb8EOtU1E=",
  },
  "Cable TV": {
    val: "Cable TV",
    translated: false,
    src: ["src/budget/gettingstarted.ts line 137"],
    h: "wISz6Dh0vnQ1Tjhr9GWcJ2rhiif2af6NXsAzEAXYxfo=",
  },
  "Holidays": {
    val: "Holidays",
    translated: false,
    src: ["src/budget/gettingstarted.ts line 141"],
    h: "HTQ10E8CaKVUu71N6uLx9J+Y6naLLRX37v0oQkesV3k=",
  },
  "Birthdays": {
    val: "Birthdays",
    translated: false,
    src: ["src/budget/gettingstarted.ts line 145"],
    h: "rzI9rIMV5VD86pAzRZf+uFAA8rWYhz1rIH5N9fDesSk=",
  },
  "Vacation ": {
    val: "Vacation ",
    translated: false,
    src: ["src/budget/gettingstarted.ts line 149"],
    h: "Buf8KjuQKnfaA4c2qPDVm8FQgYWJUfiCYYkPAnsIIBw=",
  },
  "New car": {
    val: "New car",
    translated: false,
    src: ["src/budget/gettingstarted.ts line 153"],
    h: "Bp27l6cn2XdsJhTwsG7CqndX5v6581sQjpY4tMVeh88=",
  },
  "New phone": {
    val: "New phone",
    translated: false,
    src: ["src/budget/gettingstarted.ts line 159"],
    h: "v6DgXaDFo1Yjq7Cyz8tC29KXNgr704sFNCnXIedKsHw=",
  },
  "New computer": {
    val: "New computer",
    translated: false,
    src: ["src/budget/gettingstarted.ts line 163"],
    h: "zrx1OP3GJYjfIIZU0Sa31Mm3aQjGco6OnX25VqxnLlY=",
  },
  "New roof": {
    val: "New roof",
    translated: false,
    src: ["src/budget/gettingstarted.ts line 167"],
    h: "AzV1g+0ivzcHHsk+jxoIrHthrDJ7wuVUOfurDtwV3j8=",
  },
  "Sync": {
    val: "Sync",
    translated: false,
    src: ["src/budget/importpage.tsx line 28","src/budget/importpage.tsx line 183"],
    h: "zJAmFTCwHue7APF8kCb39YCX8J17Tsy3mxyhpQQhge8=",
  },
  "Syncing...": {
    val: "Syncing...",
    translated: false,
    src: ["src/budget/importpage.tsx line 32"],
    h: "kuwg7vpvp082IqBtRakekOVu7bqB4PYxhnFVsoBDt/g=",
  },
  "A sync is already in progress": {
    val: "A sync is already in progress",
    translated: false,
    src: ["src/budget/importpage.tsx line 40"],
    h: "z6CqgxENo0xxB0LPp8P8rmnLPp1m2NElecEaJM8GDfI=",
  },
  "Error running sync": {
    val: "Error running sync",
    translated: false,
    src: ["src/budget/importpage.tsx line 46"],
    h: "LB/WNzHp4orPsbCVEJuDzUPsQUfNRDNXw7sFnbzfguw=",
  },
  "Sync has not yet been set up.": {
    val: "Sync has not yet been set up.",
    translated: false,
    src: ["src/budget/importpage.tsx line 51"],
    h: "B5XIfqqMdt0gMHz2zsZr9GTj9vSRAS5R2akgGce+fsg=",
  },
  "simplefin-connect-intro": {
    val: "To connect, do the following:",
    translated: false,
    src: ["src/budget/importpage.tsx line 88"],
    h: "421gz/BziKZhsIy2YKRFNtwoqPcbQ7uhFZWWfd6ReBg=",
  },
  "simplefin-get-token": {
    val: (mklink) => {
              return <span>Get a SimpleFIN Token from the {mklink('SimpleFIN Bridge')}</span>
            },
    translated: false,
    src: ["src/budget/importpage.tsx line 92"],
    h: "VEeKjngcHxowWbB2xWy5oNH4MXIfJQ7EqpiomT6V0fg=",
  },
  "simplefin-paste": {
    val: "Then paste your SimpleFIN Token here:",
    translated: false,
    src: ["src/budget/importpage.tsx line 102"],
    h: "vAoRsY20OBqs8bleaXD3auq8VnO9gQj7gXz5p+p71EI=",
  },
  "Connecting...": {
    val: "Connecting...",
    translated: false,
    src: ["src/budget/importpage.tsx line 107"],
    h: "fYdj0RfOQMPN3n28gswFnK4aOvozPH0hqm9oqd+NcWI=",
  },
  "Unlinked Accounts": {
    val: "Unlinked Accounts",
    translated: false,
    src: ["src/budget/importpage.tsx line 122"],
    h: "BPAjsiEkATiwSf9f6kde3yZwSmmyiPDLiZ7Rr+3Zv/A=",
  },
  "Macros": {
    val: "Macros",
    translated: false,
    src: ["src/budget/importpage.tsx line 130"],
    h: "yo4VuLKqBNhvEBgUZKyI2WypDrv1loL/wA1qO3u4Zq4=",
  },
  "SimpleFIN Connections": {
    val: "SimpleFIN Connections",
    translated: false,
    src: ["src/budget/importpage.tsx line 141"],
    h: "yzXdwvSSNy+FUFHW5+bAqRMq+j6krsNUFb/uFreKPNY=",
  },
  "CSV Fields": {
    val: "CSV Fields",
    translated: false,
    src: ["src/budget/importpage.tsx line 149"],
    h: "oqAayNv4L3OeWfsN66FDAh9MWIsR//voLRTEotp3GUQ=",
  },
  "CSV Account": {
    val: "CSV Account",
    translated: false,
    src: ["src/budget/importpage.tsx line 159"],
    h: "iUtlYMX6nlvjb8WPFElRbcnOQ/BXPc6BjaHKp6b6GUM=",
  },
  "Cancel sync": {
    val: "Cancel sync",
    translated: false,
    src: ["src/budget/importpage.tsx line 183"],
    h: "8xFWyPShIifEhumOA/PeoTtccm5TTtbQmWFViIGcPQA=",
  },
  "Test Toast": {
    val: "Test Toast",
    translated: false,
    src: ["src/budget/importpage.tsx line 191"],
    h: "5SbiliirLaAKLdgRThX+cO2RwGuC87t3Z1O0xT2WsAE=",
  },
  "Create macro": {
    val: "Create macro",
    translated: false,
    src: ["src/budget/importpage.tsx line 214"],
    h: "9xZZAswDH8zePPUhfsaSEDJ21GU1yhILKhDWtvnUlr0=",
  },
  "Connect": {
    val: "Connect",
    translated: false,
    src: ["src/budget/importpage.tsx line 235"],
    h: "pCLQy6ZAsZnJ3ff5r+iD+O2vHQhIJEEUHUhiY1NrMP0=",
  },
  "Create Macro": {
    val: "Create Macro",
    translated: false,
    src: ["src/budget/importpage.tsx line 297"],
    h: "F6PDykaoACWoqQ+oKUyJyhERAe1FjT6A3OkxL+S5l8k=",
  },
  "Connection saved!": {
    val: "Connection saved!",
    translated: false,
    src: ["src/budget/importpage.tsx line 313"],
    h: "wAgyeIQsbaI/kFPgBf8sWlKK1mf/VcP7BjHpC9TNYuc=",
  },
  "On": {
    val: "On",
    translated: false,
    src: ["src/budget/importpage.tsx line 328"],
    h: "nMAfqtecKNqqRD1YLNX1F32SXJy1exEgm1QvpnZLBQQ=",
  },
  "When \"On\" this macro will be run during a normal sync.": {
    val: "When \"On\" this macro will be run during a normal sync.",
    translated: false,
    src: ["src/budget/importpage.tsx line 328"],
    h: "HnJ7qVSPXxIg3/lygw1Ln/VvBMBs8roJwXlCpP2KnMw=",
  },
  "Name": {
    val: "Name",
    translated: false,
    src: ["src/budget/importpage.tsx line 329"],
    h: "bMXfNfAzjiMOnmM+rZmR8I9iyrRaMmSXja7cZ0eGcwU=",
  },
  "Enable Macro": {
    val: "Enable Macro",
    translated: false,
    src: ["src/budget/importpage.tsx line 359"],
    h: "9SWFr96CNVD21JQ30lw4cj1JCAZ44RNlKkDzQJ/RyuE=",
  },
  "Disable Macro": {
    val: "Disable Macro",
    translated: false,
    src: ["src/budget/importpage.tsx line 359"],
    h: "k0HEkS8+oirJJHylM2fcT1D1/IqnGFVX3cGlU3d3G50=",
  },
  "Update Macro Name": {
    val: "Update Macro Name",
    translated: false,
    src: ["src/budget/importpage.tsx line 370"],
    h: "61srDLhVLo6bOo+SbnJ0rMbhNhXXRxEjgP3/nFafMKI=",
  },
  "Delete Macro": {
    val: "Delete Macro",
    translated: false,
    src: ["src/budget/importpage.tsx line 392"],
    h: "Qb7shd6fRLybaDzPvdr0Z4VfVek/fHVV556kEcNZrH8=",
  },
  "Delete Connection": {
    val: "Delete Connection",
    translated: false,
    src: ["src/budget/importpage.tsx line 418"],
    h: "o6bxlUpjZFFTleiRLA4ykeB3yEHsAiXW9usUdJ9jh1g=",
  },
  "ID": {
    val: "ID",
    translated: false,
    src: ["src/budget/importpage.tsx line 430"],
    h: "ge86Jcy26vcv5uPFI29MfLOxHh8ctACck6nRdrl9aM4=",
  },
  "Last used": {
    val: "Last used",
    translated: false,
    src: ["src/budget/importpage.tsx line 431"],
    h: "G5a6Jdor9jRT/Wtcg9SfXQsvqL7VFvnVD2+gq7yT1Jg=",
  },
  "Description": {
    val: "Description",
    translated: false,
    src: ["src/budget/importpage.tsx line 457"],
    h: "bg0ZDIR+z+PEkinc/ZyqkERMsVZcFFm3NhQoIqZH+WM=",
  },
  "Create new account": {
    val: "Create new account",
    translated: false,
    src: ["src/budget/importpage.tsx line 494","src/csvimport.tsx line 472"],
    h: "SmoVFbeAWSO4cW1YQJbuDJQz8kenVz5++WTJEkS6Vos=",
  },
  "action.link-account": {
    val: "Link",
    translated: false,
    src: ["src/budget/importpage.tsx line 499"],
    h: "unfAYQpjuyuTjjRCodr+S+jNjRmz3nahjZ91u/j5HfE=",
  },
  "Link Account": {
    val: "Link Account",
    translated: false,
    src: ["src/budget/importpage.tsx line 504"],
    h: "Kq3pmMt0lHo1Or0xDzOxrUYLyhXtTVmVmcm/qGByIuk=",
  },
  "Update Note": {
    val: "Update Note",
    translated: false,
    src: ["src/budget/notes.tsx line 57"],
    h: "h4A+jnQW9OrS0wVVoQ9OEJ5I6/h4p7IWrKvN+uSXe4I=",
  },
  "press Escape to close": {
    val: "press Escape to close",
    translated: false,
    src: ["src/budget/notes.tsx line 62"],
    h: "5jKKS3xwogwcB2YptY5sW2/MQ/ikfMbR99l8ViHxmAA=",
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
    src: ["src/budget/reports.tsx line 610"],
    h: "aP72arzLN/j79zGtL8DWE7wcBGciRcWqMOR1aTHJmNo=",
  },
  "Average": {
    val: "Average",
    translated: false,
    src: ["src/budget/reports.tsx line 611"],
    h: "zLxQhptvlIYtt0l/prvWMqnsQHh7N1gxh33WeorRi2w=",
  },
  "Months": {
    val: "Months",
    translated: false,
    src: ["src/budget/reports.tsx line 644"],
    h: "wW/jCiA3sxpdbZ8SZ50pYiOvxUk2Ix8T6WB3ZXkAS4s=",
  },
  "Years": {
    val: "Years",
    translated: false,
    src: ["src/budget/reports.tsx line 645"],
    h: "9bCZk+mcGxconx1JMhBZKdnRo4id89h4UiucsvMRAng=",
  },
  "You don't have any recurring expense buckets yet.": {
    val: "You don't have any recurring expense buckets yet.",
    translated: false,
    src: ["src/budget/reports.tsx line 659"],
    h: "nq2IDCqs8m0MQJ5lO2TU1cnlj9nP1vwIMWMqi0WGOjk=",
  },
  "Note": {
    val: "Note",
    translated: false,
    src: ["src/budget/searchpage.tsx line 97","src/budget/searchpage.tsx line 120","src/budget/searchpage.tsx line 146","src/budget/searchpage.tsx line 175"],
    h: "omcHOlFDF1aMLf9t2/tJ9R1dYEFSQC9IiPuXLXuFwEk=",
  },
  "Account Transactions": {
    val: "Account Transactions",
    translated: false,
    src: ["src/budget/searchpage.tsx line 138"],
    h: "GPJhFDki3xJdCOMqCkqdUDX7SfEZcg9wGee8KMIuIno=",
  },
  "Bucket Transactions": {
    val: "Bucket Transactions",
    translated: false,
    src: ["src/budget/searchpage.tsx line 167"],
    h: "5hMoGWO5uTeCOujLdFnRx4w3D6Zka/avSxnH14UmJiI=",
  },
  "Nothing found matching:": {
    val: "Nothing found matching:",
    translated: false,
    src: ["src/budget/searchpage.tsx line 196"],
    h: "NF10b/Nmjj8holFGK7KIiaJhSb8bsL9Zt/Fa8fFy4gk=",
  },
  "Searching...": {
    val: "Searching...",
    translated: false,
    src: ["src/budget/searchpage.tsx line 200"],
    h: "7gAp07Zv3EjrgHoWJ04wEdRefy/aQ0zT8Y2EgQrnbHo=",
  },
  "Search:": {
    val: "Search:",
    translated: false,
    src: ["src/budget/searchpage.tsx line 208"],
    h: "OHBHBOVnuMjmjWHZURDrna8FWv+geQYMQuobRo4tkq0=",
  },
  "No matches found": {
    val: "No matches found",
    translated: false,
    src: ["src/budget/tools/amazon.tsx line 132","src/budget/tools/amazon.tsx line 176"],
    h: "p4er9wMKH/YiF5PrBRKpfEzR8HINC3N0d9Iol4zqgtQ=",
  },
  "Successfully imported Amazon Items report": {
    val: "Successfully imported Amazon Items report",
    translated: false,
    src: ["src/budget/tools/amazon.tsx line 202"],
    h: "zcIlaWv/ZpEjOL5xQHbD/Q8+nNhqDbq4oJsVr0hLKcI=",
  },
  "Successfully imported Amazon Orders report": {
    val: "Successfully imported Amazon Orders report",
    translated: false,
    src: ["src/budget/tools/amazon.tsx line 205"],
    h: "jD2nczKNctIdPeGX20WLyUGOlIl/MbKqKpP5hCxbtt8=",
  },
  "Successfully imported Amazon Refunds report": {
    val: "Successfully imported Amazon Refunds report",
    translated: false,
    src: ["src/budget/tools/amazon.tsx line 208"],
    h: "cL1VAhdyv9ML3nJT0QY3lg6QrxkJ/UQf0gbcokIDJGU=",
  },
  "Import Amazon Reports": {
    val: "Import Amazon Reports",
    translated: false,
    src: ["src/budget/tools/amazon.tsx line 217"],
    h: "Mlif1y6Q52PbHr5bzc3mqcxGJBv1uosR7E+eLTi79kA=",
  },
  "Amazon Reconciliation": {
    val: "Amazon Reconciliation",
    translated: false,
    src: ["src/budget/tools/amazon.tsx line 224"],
    h: "S+wC/RTatD+cq4mogt2XBek9Zw6sSUrQX2eNL62gzVE=",
  },
  "Amazon.com Reconciliation": {
    val: "Amazon.com Reconciliation",
    translated: false,
    src: ["src/budget/tools/toolspage.tsx line 21"],
    h: "SS/vhEAqfP5cTcprv5/4dDYZCEsTIMySGfXEngOoMj0=",
  },
  "Possible Duplicates": {
    val: "Possible Duplicates",
    translated: false,
    src: ["src/budget/transactions.tsx line 84"],
    h: "ofGzHt7c7jfCo867EwNvCl3vCUJPLeLhFiC5Fmgrgp4=",
  },
  "Show uncategorized": {
    val: "Show uncategorized",
    translated: false,
    src: ["src/budget/transactions.tsx line 106"],
    h: "ZHhB69+qL72sD+upbAXLXIDMlEWXgSbwb5RupMV5K0c=",
  },
  "Import file": {
    val: "Import file",
    translated: false,
    src: ["src/budget/transactions.tsx line 115"],
    h: "iaQvPnsbTKu/ItmjoC8ctwpVbyumVe15GLL8nCbe25Q=",
  },
  "Category": {
    val: "Category",
    translated: false,
    src: ["src/budget/transactions.tsx line 220"],
    h: "/frArhrZL+bxdiiBKi/1cYdR/tSD7rhbMHJLgHQQdNQ=",
  },
  "Update Transaction": {
    val: "Update Transaction",
    translated: false,
    src: ["src/budget/transactions.tsx line 306"],
    h: "aMF18BJOMjuVOInpbGKf/3jyTE1qYzq4oHzb3sBVcWw=",
  },
  "Create Transaction": {
    val: "Create Transaction",
    translated: false,
    src: ["src/budget/transactions.tsx line 321"],
    h: "G5NDAP857MBDE66GWUREcFAJc2pCogndYa6y+m6PRfE=",
  },
  "sync-symbol help": {
    val: "This symbol means the transaction came from an import/sync",
    translated: false,
    src: ["src/budget/transactions.tsx line 353"],
    h: "S3tDRls+AJYj6f8jSNSCa1FVyNY+ngn6Db1EQJ3dpLE=",
  },
  "Deposit": {
    val: "Deposit",
    translated: false,
    src: ["src/budget/transactions.tsx line 359"],
    h: "m1MGQLRYdNxU9nxvjA8qOlurdztaw7NQI15XBoTWhN8=",
  },
  "Withdrawl": {
    val: "Withdrawl",
    translated: false,
    src: ["src/budget/transactions.tsx line 361"],
    h: "PYAfiGRUsqYlItWQgBtWG3zimuUt57IOlS42TrZ2sf4=",
  },
  "Categorization": {
    val: "Categorization",
    translated: false,
    src: ["src/budget/transactions.tsx line 508","src/budget/transactions.tsx line 518"],
    h: "DShuYOF3daz37AE7lGCN1TajYU1VyorRCvLwh4bM1r8=",
  },
  "Cancel": {
    val: "Cancel",
    translated: false,
    src: ["src/budget/transactions.tsx line 643"],
    h: "wHdMGFBg/BNmqwwBSIr4TrXk4fT1kilDHgZN5z4N5sU=",
  },
  "Save": {
    val: "Save",
    translated: false,
    src: ["src/budget/transactions.tsx line 644","src/wwwroot/record/record.tsx line 488"],
    h: "wduD0WXtkIpIb6B4R8AA7ph724u3/Gtv27uaky6rEAU=",
  },
  "noun.income": {
    val: "Income",
    translated: false,
    src: ["src/budget/transactions.tsx line 647"],
    h: "D2fJbta5d1Z5QYuRC5zzkBHsItZOOgY4FKrFJ64BvRs=",
  },
  "noin.income": {
    val: "Income",
    translated: false,
    src: ["src/budget/transactions.tsx line 659"],
    h: "D2fJbta5d1Z5QYuRC5zzkBHsItZOOgY4FKrFJ64BvRs=",
  },
  "Categorize": {
    val: "Categorize",
    translated: false,
    src: ["src/budget/transactions.tsx line 687"],
    h: "mA6/TefxgXpo2M+OUx/ATLQ4QYHv4t1+8vy3MmV+EQg=",
  },
  "Identify the data each column contains using the drop downs below.": {
    val: "Identify the data each column contains using the drop downs below.",
    translated: false,
    src: ["src/csvimport.tsx line 297"],
    h: "59JoGSJaPOdtgmCL+QLp8U/e6y+OGGM8fdEX4sClrpk=",
  },
  "You must have at least one column each set to Amount, Memo and Date Posted.": {
    val: "You must have at least one column each set to Amount, Memo and Date Posted.",
    translated: false,
    src: ["src/csvimport.tsx line 298"],
    h: "k5NuGeKNgPfZs7xUbwp5PgfPr6dosV0ZTVxAnphHH6E=",
  },
  "For Date Posted, you must also choose the date format.": {
    val: "For Date Posted, you must also choose the date format.",
    translated: false,
    src: ["src/csvimport.tsx line 299"],
    h: "G2XPMMlP2JPnutFhPAo1RnCQMTzdukxPSc+FjoF2Vjs=",
  },
  "If multiple columns are selected for Amount, the first non-zero value will be used.  This is helpful if the CSV contains separate Credit and Debit columns.": {
    val: "If multiple columns are selected for Amount, the first non-zero value will be used.  This is helpful if the CSV contains separate Credit and Debit columns.",
    translated: false,
    src: ["src/csvimport.tsx line 300"],
    h: "bxc4+JxhDrm2oYWek0ISeJDxq173KLfpcnOT4GEMWGQ=",
  },
  "Only select a column for Unique ID if you are sure it contains bank-assigned, unique transaction IDs.  Most CSVs will not have this field.": {
    val: "Only select a column for Unique ID if you are sure it contains bank-assigned, unique transaction IDs.  Most CSVs will not have this field.",
    translated: false,
    src: ["src/csvimport.tsx line 301"],
    h: "MUc4sPlkaqyooNhJKZ15rbBQdclJSNbaarHERiW1hrs=",
  },
  "Click the \"Set mapping\" to continue.": {
    val: "Click the \"Set mapping\" to continue.",
    translated: false,
    src: ["src/csvimport.tsx line 302"],
    h: "17QBrVZk8kjbKoqmqsbEBBHyjcoru22TcYanag65Jrw=",
  },
  "Date Posted": {
    val: "Date Posted",
    translated: false,
    src: ["src/csvimport.tsx line 338"],
    h: "3A+vhaBB21UASdnwmNYVGMV9qH/U43D3DCsVSXlWasY=",
  },
  "Unique ID": {
    val: "Unique ID",
    translated: false,
    src: ["src/csvimport.tsx line 339"],
    h: "UZsJmQ28mtEO349l3zdNHoAtb0JT1LT9e7EjedqptSE=",
  },
  "(optional)": {
    val: "(optional)",
    translated: false,
    src: ["src/csvimport.tsx line 339"],
    h: "njVpYkgCdiB755Pxnsk1D8GELOWqw1mBBYG+YQr7e98=",
  },
  "Set mapping": {
    val: "Set mapping",
    translated: false,
    src: ["src/csvimport.tsx line 367"],
    h: "0GImzkG1VPzFzjFdepzZz8+Ysis4xn7QQRVGlxVrQIw=",
  },
  "Invalid": {
    val: "Invalid",
    translated: false,
    src: ["src/csvimport.tsx line 395","src/csvimport.tsx line 398","src/csvimport.tsx line 409"],
    h: "TTWlQj/xySwj3x3tLJd80Tl+VmJXWWdhFpMq90hNbfg=",
  },
  "Select the account these transactions belong to.": {
    val: "Select the account these transactions belong to.",
    translated: false,
    src: ["src/csvimport.tsx line 450"],
    h: "qkaCMMw9CYakrPrLxgfkBp3KsfadBdGLYgZB8urPaC4=",
  },
  "edit.mapping": {
    val: (onClick) => {
          return <span>Or <a href="#" onClick={onClick}>edit the mapping.</a></span>
        },
    translated: false,
    src: ["src/csvimport.tsx line 450"],
    h: "hFYUKKIqC+nYQ+RRKwNu3/PGxbtuHzNHoigSJwCK8d4=",
  },
  "Account name": {
    val: "Account name",
    translated: false,
    src: ["src/csvimport.tsx line 481"],
    h: "Wo+ZnjRTxGkow1m4BGCavACj82/UajUNs6oLDXB++sU=",
  },
  "Provide a name for the new account.": {
    val: "Provide a name for the new account.",
    translated: false,
    src: ["src/csvimport.tsx line 490"],
    h: "WFHwJzRVIraGkeqDS03YjWe0vMsPsiRE1qM6V/Ef/xE=",
  },
  "Finish import": {
    val: "Finish import",
    translated: false,
    src: ["src/csvimport.tsx line 501"],
    h: "4xsUuxEj2AOOfV6aSUBcosl89BFoAZ+srMPIeWzIjUI=",
  },
  "Error": {
    val: "Error",
    translated: false,
    src: ["src/errors.ts line 120","src/errors.ts line 144"],
    h: "/ErBlknw7o83xx0uIDCjdDA4u5bAwnNZuhFd2GV1Zcw=",
  },
  "There has been an error.": {
    val: "There has been an error.",
    translated: false,
    src: ["src/errors.ts line 121"],
    h: "viN5uLRSpgzhvoD9KO9g1cr7ihLQ0Men9LiUpy9RcwE=",
  },
  "error-detail": {
    val: "If this error keeps happening or doesn't make sense, please report a bug or chat with us.",
    translated: false,
    src: ["src/errors.ts line 122"],
    h: "10Kk29tlHpBnhcTf7RRMfq1OZPGZgvPPguRlInaLNoY=",
  },
  "action.ignore": {
    val: "Ignore",
    translated: false,
    src: ["src/errors.ts line 123"],
    h: "K8sAh2XND1/tJOuX9xTLmr1fQjUOB70cfc9GwI62fEs=",
  },
  "action.chat": {
    val: "Chat",
    translated: false,
    src: ["src/errors.ts line 124"],
    h: "Ct9w1d0AYWvEp42SCfVm7DFmet6f43eJOSWwg17o+7A=",
  },
  "action.report bug": {
    val: "Report Bug",
    translated: false,
    src: ["src/errors.ts line 125"],
    h: "RxuE9Dh0Dadda2PtjUPD0dQ7b8aQok84Ytvw31ABBRU=",
  },
  "OK": {
    val: "OK",
    translated: false,
    src: ["src/errors.ts line 146"],
    h: "mMSSK7ZBxlx6MLe8r98jC5sAtmk2McVhRqslsnhu5KM=",
  },
  "File type not recognized.": {
    val: "Import Failed",
    translated: false,
    src: ["src/importing.ts line 74"],
    h: "Z6QnadHff9fEji/vnFxKuxbfAKGNb263Hm13z3txfSM=",
  },
  "Buckets License": {
    val: "Buckets License",
    translated: false,
    src: ["src/mainprocess/dbstore.ts line 37","src/mainprocess/dbstore.ts line 71"],
    h: "sym++hSpJ7LeHTQAaiYRAK41eYIw9pfMFO2EbYTHGxo=",
  },
  "Unregistered Version": {
    val: "Unregistered Version",
    translated: false,
    src: ["src/mainprocess/drm.ts line 88"],
    h: "x9ekMClqI57T6jREU5VJurBCzlD+hBNJ8pHNQ0zMB1U=",
  },
  "Hello!  Thanks for trying out Buckets.": {
    val: "Hello!  Thanks for trying out Buckets.",
    translated: false,
    src: ["src/mainprocess/drm.ts line 89"],
    h: "0m9VvMGwLCqD3lmZ24GbzlkRxPX1kf/DsbWA9kkBWX0=",
  },
  "nag-message": {
    val: () => `This is an unregistered trial version, and although the trial is untimed, a license must be purchased for continued use.

Would you like to purchase a license now?`,
    translated: false,
    src: ["src/mainprocess/drm.ts line 90"],
    h: "cugeP6FVXqdiCtOers5rslG0mDD5t/Rfl1ZWslfhD48=",
  },
  "Later": {
    val: "Later",
    translated: false,
    src: ["src/mainprocess/drm.ts line 93","src/mainprocess/updater.ts line 194"],
    h: "wZUl6R8m08S1l0zLg0xgDG2XE1sodemTuRDbalIB4VM=",
  },
  "Purchase": {
    val: "Purchase",
    translated: false,
    src: ["src/mainprocess/drm.ts line 94"],
    h: "SfwhUMXO5ckJhwUkBjdC9n17k8zH4+hoAlFoUdOwE/g=",
  },
  "Unable to open the file:": {
    val: "Unable to open the file:",
    translated: false,
    src: ["src/mainprocess/files.ts line 206"],
    h: "MxbgnQR4Cyi549ltzzIDDAI1qRGqoeRm0zOApQMS2DY=",
  },
  "Open Transaction File": {
    val: "Open Transaction File",
    translated: false,
    src: ["src/mainprocess/files.ts line 491"],
    h: "8teUT2P/KToCDoMTqS88JNVtG9PTE/5PojtS1SGmokw=",
  },
  "File does not exist:": {
    val: "File does not exist:",
    translated: false,
    src: ["src/mainprocess/files.ts line 512"],
    h: "RPeWW9lCHkg+d6XybADj3OH2jxrYcSOhrA3+QHEcYz0=",
  },
  "Open Buckets Budget": {
    val: "Open Buckets Budget",
    translated: false,
    src: ["src/mainprocess/files.ts line 708"],
    h: "5odppwzoA5bC5nAM3F+GDOVrAq3NfjGxrE0ZFXseCDg=",
  },
  "budget-file-type-name": {
    val: "Buckets Budget",
    translated: false,
    src: ["src/mainprocess/files.ts line 710"],
    h: "g2jeytcuhPOlEo6R2OlTzT3vNdE7sVWGnXuffEioq4c=",
  },
  "Buckets Budget Filename": {
    val: "Buckets Budget Filename",
    translated: false,
    src: ["src/mainprocess/files.ts line 727"],
    h: "PMqvee/qJsh/OYtRi+hbcH4fgl07SR6XM0wx4c1C+sU=",
  },
  "No file chosen": {
    val: "No file chosen",
    translated: false,
    src: ["src/mainprocess/files.ts line 733"],
    h: "MKsAG2u3PyHfYzTNB+XEA8Myeu1DiSU2HNpIW8QXTpc=",
  },
  "File": {
    val: "File",
    translated: false,
    src: ["src/mainprocess/menu.ts line 23"],
    h: "9XpUff7TtVQbIncvgmrfzVB2gkBh35RnM1ET/HFr3k0=",
  },
  "New Budget...": {
    val: "New Budget...",
    translated: false,
    src: ["src/mainprocess/menu.ts line 26","src/wwwroot/misc/wizard.html line 0"],
    h: "daxIu+dqn7pfUDeB26rLQnPnAz2v5opSTHbAyBovaoI=",
  },
  "Open Budget...": {
    val: "Open Budget...",
    translated: false,
    src: ["src/mainprocess/menu.ts line 33","src/wwwroot/misc/wizard.html line 0"],
    h: "67FfAce57aSIe2ncVfWeIeiiRLQQ8uuEUdDyI6UHxHU=",
  },
  "Open Recent...": {
    val: "Open Recent...",
    translated: false,
    src: ["src/mainprocess/menu.ts line 40"],
    h: "Uf1w3VIwUvsmKvOkQtBwsGvbRzQ5gMbEq/iyNzv95cs=",
  },
  "Undo": {
    val: "Undo",
    translated: false,
    src: ["src/mainprocess/menu.ts line 53"],
    h: "Z1A2vTdYwfdLsWS25iSchnHOHa1VfbQg7u8MDGHk4yo=",
  },
  "Redo": {
    val: "Redo",
    translated: false,
    src: ["src/mainprocess/menu.ts line 55"],
    h: "7buMF65dyGtKDY/ZW/Lkn7eUmdudCsdGV3KR2lYLLA0=",
  },
  "Edit": {
    val: "Edit",
    translated: false,
    src: ["src/mainprocess/menu.ts line 72"],
    h: "9+ZynTDPePvsJX4rW8Mn0wEzk0GRQ+udON01NKHVsQU=",
  },
  "Cut": {
    val: "Cut",
    translated: false,
    src: ["src/mainprocess/menu.ts line 107"],
    h: "+kuX06pgC809fwr+5h9VbC8sVgVWo6EXgg6bzfXXtJs=",
  },
  "Copy": {
    val: "Copy",
    translated: false,
    src: ["src/mainprocess/menu.ts line 111"],
    h: "T2DR4UKv+pyVWY8GzF/WWjk5XqMXgZ0gDyXkZmYczHw=",
  },
  "Paste": {
    val: "Paste",
    translated: false,
    src: ["src/mainprocess/menu.ts line 115"],
    h: "n2Hnio0AcQPZejqQ+hm35GthBg0zYDNoxd8RCFRUhu4=",
  },
  "Paste and Match Style": {
    val: "Paste and Match Style",
    translated: false,
    src: ["src/mainprocess/menu.ts line 119"],
    h: "w8hRIxBBNWtXNPcYtQ4t/mTHfPF66U/mJbVpOiIDgYE=",
  },
  "Delete": {
    val: "Delete",
    translated: false,
    src: ["src/mainprocess/menu.ts line 123"],
    h: "sm3jcrSw6qxgICiEpy25imvm6QNueF6oZ+oBxfeSEJg=",
  },
  "Select All": {
    val: "Select All",
    translated: false,
    src: ["src/mainprocess/menu.ts line 127"],
    h: "tLJuQPindRFUyvGGdMLJbBHcVpAODsfT5p2gDnpB/Oo=",
  },
  "Find...": {
    val: "Find...",
    translated: false,
    src: ["src/mainprocess/menu.ts line 131"],
    h: "aUU1pzvlZzKNgYZP2ZpPtQMImBOStbFnK33P3YwXTNs=",
  },
  "Find Next": {
    val: "Find Next",
    translated: false,
    src: ["src/mainprocess/menu.ts line 138"],
    h: "LALfI5V4TsQo0DcGJwmNmrm3xNPtY5PmQuxB1voZo34=",
  },
  "Find Previous": {
    val: "Find Previous",
    translated: false,
    src: ["src/mainprocess/menu.ts line 145"],
    h: "0n6Dq5KDTxxsTAKrJE+RDdgi9ln6FyfUEPNBJ6ejZ5o=",
  },
  "View": {
    val: "View",
    translated: false,
    src: ["src/mainprocess/menu.ts line 154"],
    h: "paIseOhKCT2+NaUBPKk98vQB/lphf7jIGeERV77doDg=",
  },
  "Reload": {
    val: "Reload",
    translated: false,
    src: ["src/mainprocess/menu.ts line 158"],
    h: "hUVVd3tppLGqwgo2OeC3h334aTF0Y+/GHbuL/I1clYk=",
  },
  "Force Reload": {
    val: "Force Reload",
    translated: false,
    src: ["src/mainprocess/menu.ts line 162"],
    h: "ktBJY2UXO+2r0ZvmbQXhArN51bSTnyaNnnBNR9PQ5K8=",
  },
  "Toggle Developer Tools": {
    val: "Toggle Developer Tools",
    translated: false,
    src: ["src/mainprocess/menu.ts line 166"],
    h: "IYSSUL9ezB58nRuajYVa+zH4ucrmXQOB92zA7sDlrJc=",
  },
  "Actual Size": {
    val: "Actual Size",
    translated: false,
    src: ["src/mainprocess/menu.ts line 171"],
    h: "k1ZfUj7bmT4XwiALRlZo7ztl2d+e7JcLt3WCnvjpBYg=",
  },
  "Zoom In": {
    val: "Zoom In",
    translated: false,
    src: ["src/mainprocess/menu.ts line 175"],
    h: "p3yHl1qkGVfRDPsLKitBuZhRJIDaTy3fV/vbWqOzo24=",
  },
  "Zoom Out": {
    val: "Zoom Out",
    translated: false,
    src: ["src/mainprocess/menu.ts line 179"],
    h: "hRo1uzcSNStVll7ef2xHOB6PqFh+q7Sg/VHiGcK4M8M=",
  },
  "Toggle Full Screen": {
    val: "Toggle Full Screen",
    translated: false,
    src: ["src/mainprocess/menu.ts line 184"],
    h: "2ZRq+R5E0Cp4QI+y5jCefU1IOiYvNWLrN/iiJq6hGr8=",
  },
  "Window": {
    val: "Window",
    translated: false,
    src: ["src/mainprocess/menu.ts line 190"],
    h: "qjw17TPhgeX5msjicdTljyCEeBLFbQvz/oyOunMLJnQ=",
  },
  "Minimize": {
    val: "Minimize",
    translated: false,
    src: ["src/mainprocess/menu.ts line 194","src/mainprocess/menu.ts line 395"],
    h: "ELhkWGGY5oNKpfCzoXXW6TgkfS1nI0ZuJbWyYLmT+ro=",
  },
  "Close Window": {
    val: "Close Window",
    translated: false,
    src: ["src/mainprocess/menu.ts line 198","src/mainprocess/menu.ts line 391"],
    h: "hrPxvP/hrVgtNNTMX4sv5sljx57neTy+2p0U1TKGuCE=",
  },
  "Budget": {
    val: "Budget",
    translated: false,
    src: ["src/mainprocess/menu.ts line 204"],
    h: "zOO4DqNSFLa6Z9vlmfaz8OnwggHn8wJeP058V5mUKbE=",
  },
  "Duplicate Window": {
    val: "Duplicate Window",
    translated: false,
    src: ["src/mainprocess/menu.ts line 207"],
    h: "tjwFTBARBKQ5uC9Fh0zm7ag/RViV95pptJBJn9eVqHE=",
  },
  "Import Transactions...": {
    val: "Import Transactions...",
    translated: false,
    src: ["src/mainprocess/menu.ts line 215"],
    h: "PPLzf/61MKc3iWfDMTRo6ERH/TYu6TxBH2vmVbZD5Lk=",
  },
  "Import From YNAB4...": {
    val: "Import From YNAB4...",
    translated: false,
    src: ["src/mainprocess/menu.ts line 226"],
    h: "z10Vp9BzEC6CkLTNtR8xywSTNYGMBbGFZMD7XUEbrVs=",
  },
  "Help": {
    val: "Help",
    translated: false,
    src: ["src/mainprocess/menu.ts line 241"],
    h: "TvUUB7AuCuFJ9IWiz2SbsjnUvYoDPZAaMPxup/rwosM=",
  },
  "Learn More": {
    val: "Learn More",
    translated: false,
    src: ["src/mainprocess/menu.ts line 244"],
    h: "8bk7nEyrz+Q0vmMisWIPVuvHR4/TeW4DhemALir6s1o=",
  },
  "Getting Started...": {
    val: "Getting Started...",
    translated: false,
    src: ["src/mainprocess/menu.ts line 248"],
    h: "XD8GQYEIDrNjTMPX4TjGeAbbCIEBcAONlYPd/D8Hz84=",
  },
  "Buckets Guide": {
    val: "Buckets Guide",
    translated: false,
    src: ["src/mainprocess/menu.ts line 255"],
    h: "iK/jSwFsIOO0YBANlaqC8+gTWFX+9IBYpc+HuiQ2U/c=",
  },
  "Chat...": {
    val: "Chat...",
    translated: false,
    src: ["src/mainprocess/menu.ts line 262"],
    h: "SytGirG0+cdtbPfjBma/G/tEOt4rdOj4mnjcaWsTbt8=",
  },
  "Show Log Files...": {
    val: "Show Log Files...",
    translated: false,
    src: ["src/mainprocess/menu.ts line 268"],
    h: "In00T9z1A4xO6nLu8zAU5s3UzH3+IcK4XjRvrT9CGMs=",
  },
  "Report Bug...": {
    val: "Report Bug...",
    translated: false,
    src: ["src/mainprocess/menu.ts line 274"],
    h: "i17nG0QruMiCn612ogDToWB1g4xqqei691Yeh/t8MIk=",
  },
  "Report Translation Error...": {
    val: "Report Translation Error...",
    translated: false,
    src: ["src/mainprocess/menu.ts line 280"],
    h: "/jSK7LcBLJ1FsOYb9ntsVYAxwAyGLLUZXlTL/zrC020=",
  },
  "It says:": {
    val: "It says:",
    translated: false,
    src: ["src/mainprocess/menu.ts line 283"],
    h: "gbWdWRhcKGQzFCi8CcKy9Bmfg2oYqz1zGMHQzSU8jQE=",
  },
  "It should say:": {
    val: "It should say:",
    translated: false,
    src: ["src/mainprocess/menu.ts line 283"],
    h: "RjwjZtmUgFzGUxR0zMmyXh0cHzpzsbj4nk6R7tGe+i4=",
  },
  "Purchase Full Version...": {
    val: "Purchase Full Version...",
    translated: false,
    src: ["src/mainprocess/menu.ts line 294"],
    h: "+6h2Y0QTHEVui0aUhwAlCsyJp/F+S0PYKMRlQysqjrk=",
  },
  "Enter License...": {
    val: "Enter License...",
    translated: false,
    src: ["src/mainprocess/menu.ts line 300"],
    h: "A+/eZ8qTAh97iBouJPInRkCg7F0nOkteYEBO7+lFHHA=",
  },
  "About Buckets": {
    val: "About Buckets",
    translated: false,
    src: ["src/mainprocess/menu.ts line 320"],
    h: "9bzPsx+kCkNUeLTSVjaygyWCkm3VCdsFaAFRvdS+xEU=",
  },
  "Check For Updates...": {
    val: "Check For Updates...",
    translated: false,
    src: ["src/mainprocess/menu.ts line 323"],
    h: "S/1p0syaOMqjAbHpmZa6gWaIh/9e29QR2cRJhiMadz0=",
  },
  "Preferences...": {
    val: "Preferences...",
    translated: false,
    src: ["src/mainprocess/menu.ts line 329"],
    h: "6iQxyJ1WC9/Z0f0saApfwL5hmhgN5YgJeikLAYqCGBI=",
  },
  "Quit Buckets": {
    val: "Quit Buckets",
    translated: false,
    src: ["src/mainprocess/menu.ts line 337"],
    h: "QILEHXgAk6vuNPV3rqkbn2QRZ8WKrPnAZnscp7n8WaM=",
  },
  "Services": {
    val: "Services",
    translated: false,
    src: ["src/mainprocess/menu.ts line 353"],
    h: "Y5+GuNZXfFSynDsHvAY8cr0RqU+moaHZNmOk2eQrsNs=",
  },
  "Hide Buckets": {
    val: "Hide Buckets",
    translated: false,
    src: ["src/mainprocess/menu.ts line 358"],
    h: "38YdGXFjndmgDFgXTpfUZ0F+W/D9e267YaAvzYZm4O8=",
  },
  "Hide Others": {
    val: "Hide Others",
    translated: false,
    src: ["src/mainprocess/menu.ts line 362"],
    h: "RpKz0G7Y8OE5oyGm0/zRffPdr7RQkneZCYrikLHIZ+U=",
  },
  "Show All": {
    val: "Show All",
    translated: false,
    src: ["src/mainprocess/menu.ts line 366"],
    h: "Kng6HqlojyhuqEK6kaB3KPtAs1w0LcpFWkJYrscali0=",
  },
  "Speech": {
    val: "Speech",
    translated: false,
    src: ["src/mainprocess/menu.ts line 375"],
    h: "i4Qm95bH8zVEbjpkUi7jvQiLtDzGkW9z90XEkiglzHM=",
  },
  "Start Speaking": {
    val: "Start Speaking",
    translated: false,
    src: ["src/mainprocess/menu.ts line 379"],
    h: "v8sFOpEAoczjEjGparKZylHWHoxHMVQriwuhJaec2rY=",
  },
  "Stop Speaking": {
    val: "Stop Speaking",
    translated: false,
    src: ["src/mainprocess/menu.ts line 383"],
    h: "Pme2/qME7bKdVrHTIEBQYt1Fu/SXRNGyy6sLBfKpqqk=",
  },
  "Zoom": {
    val: "Zoom",
    translated: false,
    src: ["src/mainprocess/menu.ts line 399"],
    h: "Zjzswxbrkbj1TLPOYCtimoyh/aJlkF/mxeghbzdheSs=",
  },
  "Bring All to Front": {
    val: "Bring All to Front",
    translated: false,
    src: ["src/mainprocess/menu.ts line 404"],
    h: "vXNLSncC5dTsDdfhZY5dhbev+Y3PpqQEy1fwxTkGWU0=",
  },
  "Update Available": {
    val: "Update Available",
    translated: false,
    src: ["src/mainprocess/updater.ts line 192"],
    h: "FKOD6i3t69T8rvTwVJ5VSnLfkQPBcceuuk2X4ZsNKMY=",
  },
  "version-available": {
    val: (newv:string) => `Version ${newv} available.`,
    translated: false,
    src: ["src/mainprocess/updater.ts line 193","src/wwwroot/misc/updates.tsx line 56"],
    h: "YCoofx1v0tRUHkHfhFnm6bV2xXfnsNT6QAyXqgkUa9c=",
  },
  "Download": {
    val: "Download",
    translated: false,
    src: ["src/mainprocess/updater.ts line 195"],
    h: "QVM3NKWnuJ19cWUaN3y9fVCbkiQTygWbOYuFMklAwNc=",
  },
  "Confirm password:": {
    val: "Confirm password:",
    translated: false,
    src: ["src/models/bankmacro.ts line 42"],
    h: "Px/rLFgkE/Sv1Z+Xm0frULVV3lxvrEc7ABJaDzmv670=",
  },
  "Passwords did not match": {
    val: "Passwords did not match",
    translated: false,
    src: ["src/models/bankmacro.ts line 48"],
    h: "PyUeXNOVYhNDM/De1HIPLeiwy6d+x7bkZphOo5ZqR6Q=",
  },
  "Create budget password:": {
    val: "Create budget password:",
    translated: false,
    src: ["src/models/bankmacro.ts line 86"],
    h: "Bf9XVrpN9UpVSKpZNRpBUw/IaFjMkNCmH4gpAfhYFkY=",
  },
  "Sync failed": {
    val: "Sync failed",
    translated: false,
    src: ["src/models/simplefin.ts line 108"],
    h: "jBGq60u/Y2WKAulnVvspUq9tLPFtXOnQYczjXXViGA0=",
  },
  "Unexpected sync error": {
    val: "Unexpected sync error",
    translated: false,
    src: ["src/models/simplefin.ts line 117"],
    h: "78kYsQMTfGS8BNaZVuqYaRojJlTpcmN6CF9PQKKO0ME=",
  },
  "Invalid SimpleFIN Token": {
    val: "Invalid SimpleFIN Token",
    translated: false,
    src: ["src/models/simplefin.ts line 237"],
    h: "C6BzeT0S0G+xUVzgdubtVeH39oIVS4hUaVBd2gKS3Uo=",
  },
  "Unable to claim access token": {
    val: "Unable to claim access token",
    translated: false,
    src: ["src/models/simplefin.ts line 249"],
    h: "Gao95RuT9JvhdAoZ5winV9os7iMaPIex3Vq9CMSjhzs=",
  },
  "Error fetching data": {
    val: "Error fetching data",
    translated: false,
    src: ["src/models/simplefin.ts line 265"],
    h: "z94B0956dECmmaMVLZFW0oZMVtA92etw+2ZqumR4K9Q=",
  },
  "Error parsing response": {
    val: "Error parsing response",
    translated: false,
    src: ["src/models/simplefin.ts line 272"],
    h: "PsIRbom+m8Y5OIEPW2rzJYVlNA2NQrZmEQnpW7Y/9KI=",
  },
  "/mo": {
    val: "/mo",
    translated: false,
    src: ["src/time.tsx line 64"],
    h: "ggq7na5vMB1wOjQQo0Wq0o7ctwbMUiiJr1tRRKphHss=",
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
    src: ["src/wwwroot/misc/enter_license.tsx line 28"],
    h: "6NxF/uD6sOEPkEbPFOHdBKRxj0ZXVbmnPkRXNJDy0zs=",
  },
  "Restart Buckets": {
    val: "Restart Buckets",
    translated: false,
    src: ["src/wwwroot/misc/enter_license.tsx line 29"],
    h: "TNcYWk7YxhZ0U9Q+mFMRedeWB36VsDXoYgBapDvZCgM=",
  },
  "Invalid license": {
    val: "Invalid license",
    translated: false,
    src: ["src/wwwroot/misc/enter_license.tsx line 32"],
    h: "BfJdh6NOzurSCMGRmCP8gb1VAXUlrSSsCFIGHGXtNiA=",
  },
  "Preferences": {
    val: "Preferences",
    translated: false,
    src: ["src/wwwroot/misc/preferences.html line 0"],
    h: "g621xQsjA9sSCp1y6ZMsd3RolFp3OMEblL/gPz1k0v8=",
  },
  "Language:": {
    val: "Language:",
    translated: false,
    src: ["src/wwwroot/misc/preferences.tsx line 27"],
    h: "Xcdts2Yh+LAPXO+KLTuFxMiNsv+xxIJPLlbCDbLrink=",
  },
  "System Default": {
    val: "System Default",
    translated: false,
    src: ["src/wwwroot/misc/preferences.tsx line 37"],
    h: "UB0KL/QZH4CikHbpWgyv1qC4YgSqsZGmS6lmmgTTiFw=",
  },
  "Animation:": {
    val: "Animation:",
    translated: false,
    src: ["src/wwwroot/misc/preferences.tsx line 44"],
    h: "11MkZLAqpQ4eVU9BzD6XMqSxlyIqQU+lodDdxwNkAag=",
  },
  "(Restart Buckets for the change to take effect.)": {
    val: "(Restart Buckets for the change to take effect.)",
    translated: false,
    src: ["src/wwwroot/misc/preferences.tsx line 57"],
    h: "IYHFL+R57iN4UW8AS35balApUouS8GdkRIQ3uEa6wT8=",
  },
  "Prompt": {
    val: "Prompt",
    translated: false,
    src: ["src/wwwroot/misc/prompt.html line 0"],
    h: "56HrS6R0zfyg5ruiVb/J04UP3T8O2V99V+mXHvVfEZ0=",
  },
  "Report Bug": {
    val: "Report Bug",
    translated: false,
    src: ["src/wwwroot/misc/reportbug.html line 0"],
    h: "RxuE9Dh0Dadda2PtjUPD0dQ7b8aQok84Ytvw31ABBRU=",
  },
  "Your email address:": {
    val: "Your email address:",
    translated: false,
    src: ["src/wwwroot/misc/reportbug.html line 0"],
    h: "/ip+dZCEKXdLQFW5CAt/fB8OBf/rD+67pz8etOXlJXc=",
  },
  "(If you want a response)": {
    val: "(If you want a response)",
    translated: false,
    src: ["src/wwwroot/misc/reportbug.html line 0"],
    h: "Ij4mQm0L5WO4Iunvl3fKwbhLwjTodc3Chq81GsFM+T0=",
  },
  "Optional message:": {
    val: "Optional message:",
    translated: false,
    src: ["src/wwwroot/misc/reportbug.html line 0"],
    h: "zVM8610w5Mn1yRIYOsmOY5ZxBd2KLIudsimw610auYU=",
  },
  "Include log file": {
    val: "Include log file",
    translated: false,
    src: ["src/wwwroot/misc/reportbug.html line 0"],
    h: "rjy01ggb0uSRPn/tmrf/BVwGQiXaaSc6Nh+o92BIU3U=",
  },
  "Screenshots:": {
    val: "Screenshots:",
    translated: false,
    src: ["src/wwwroot/misc/reportbug.html line 0"],
    h: "Vl/m/PU/CoPSp/t+drAAfxlQ818VKjlWKN8fsB4/+V4=",
  },
  "(Drop files or click)": {
    val: "(Drop files or click)",
    translated: false,
    src: ["src/wwwroot/misc/reportbug.html line 0"],
    h: "cn8vjUpkolK+X1qsHPyR11Qj7uQWZVR6eWnhPRb/zfw=",
  },
  "\n        Though filling out this form is preferrable, you can also email bugs@budgetwithbuckets.com\n      ": {
    val: "\n        Though filling out this form is preferrable, you can also email bugs@budgetwithbuckets.com\n      ",
    translated: false,
    src: ["src/wwwroot/misc/reportbug.html line 0"],
    h: "05fPQ/cX0e4UXnYsbNTo8b6FUwq/WZ1URc7ixr6WlV8=",
  },
  "Attached files are too large.": {
    val: "Attached files are too large.",
    translated: false,
    src: ["src/wwwroot/misc/reportbug.html line 0"],
    h: "HfDI7uw+P4uLUPkDu0rxQhxJqjqcriWmD9EWYaiUqvY=",
  },
  "Send Report": {
    val: "Send Report",
    translated: false,
    src: ["src/wwwroot/misc/reportbug.html line 0"],
    h: "aLgG0qubuw0p0tGIUYKjgxecVsL0e3AKvQ5+W2JZg18=",
  },
  "Check for Updates": {
    val: "Check for Updates",
    translated: false,
    src: ["src/wwwroot/misc/updates.html line 0","src/wwwroot/misc/updates.tsx line 48"],
    h: "6vtxqhyfiDaIXgTBH0pdoPzTGftDDEoRFNGU082PhRk=",
  },
  "There was an error.  Maybe try again?": {
    val: "There was an error.  Maybe try again?",
    translated: false,
    src: ["src/wwwroot/misc/updates.tsx line 42"],
    h: "l+W2GSV3tl8Gx19ZW+wOCziBj5/UeMCVO8tvh4P7LEo=",
  },
  "Checking for updates...": {
    val: "Checking for updates...",
    translated: false,
    src: ["src/wwwroot/misc/updates.tsx line 52"],
    h: "wjjhyYhYEFdJWUmwdJIEdxm0iAq2bwrWU79ANObzzZY=",
  },
  "Skip This Version": {
    val: "Skip This Version",
    translated: false,
    src: ["src/wwwroot/misc/updates.tsx line 60"],
    h: "YnC7GSI4QITirt1GGV/Tc1FvTbJYICkEeF3zj4u4eak=",
  },
  "Download Update": {
    val: "Download Update",
    translated: false,
    src: ["src/wwwroot/misc/updates.tsx line 63"],
    h: "OvekDBh71chOkbTXqPs/V/x0lNbpc668s4hyXRF5G+I=",
  },
  "You are running the latest version!": {
    val: "You are running the latest version!",
    translated: false,
    src: ["src/wwwroot/misc/updates.tsx line 69"],
    h: "hShy87A6GAhRqqtK+8VdVeGD70zA64iiV0/SwectQ0I=",
  },
  "Downloading update...": {
    val: "Downloading update...",
    translated: false,
    src: ["src/wwwroot/misc/updates.tsx line 72"],
    h: "vTHXpZeFxjQhKPwUQPCm+eHcyYR6YjSmIm4mtV/5iTE=",
  },
  "Update downloaded.": {
    val: "Update downloaded.",
    translated: false,
    src: ["src/wwwroot/misc/updates.tsx line 83"],
    h: "DO2vE3TgW3xjiD8ZaOWeScL3qWCyiFPK8GENQ9NosYw=",
  },
  "Install and Relaunch Buckets": {
    val: "Install and Relaunch Buckets",
    translated: false,
    src: ["src/wwwroot/misc/updates.tsx line 87"],
    h: "bzusTDIT831mqEwmmM59eT12mfoNMYiGPbUfoIzaCwo=",
  },
  "Recently used": {
    val: "Recently used",
    translated: false,
    src: ["src/wwwroot/misc/wizard.html line 0"],
    h: "tJ5cBjszrV/JztG5V1FUrgo0bfVgXfK5KB495TvGsYs=",
  },
  "EXPERIMENTAL Buckets Macro Maker": {
    val: "EXPERIMENTAL Buckets Macro Maker",
    translated: false,
    src: ["src/wwwroot/record/record.html line 0","src/wwwroot/record/record.tsx line 834"],
    h: "NZPVXQ+Dw1vv0fLXY+Z4R1KiEkXjDZtSmY3tVz5L1VI=",
  },
  "navigatestep": {
    val: (url) => `Go to ${url}`,
    translated: false,
    src: ["src/wwwroot/record/record.tsx line 354"],
    h: "nI/J4GfYlL6BgRZRSiPFfA5o7ASdx2VVYW6x3vgCuKE=",
  },
  "off": {
    val: "off",
    translated: false,
    src: ["src/wwwroot/record/record.tsx line 361"],
    h: "nzvsum5LFYOz4ZRB3eTVliJTfZvVSpTSImJ4XkhThNA=",
  },
  "on": {
    val: "on",
    translated: false,
    src: ["src/wwwroot/record/record.tsx line 363"],
    h: "mQwjhouWWBSxF8+abE3+RUUurcIXHh+YGGXr/ITxByQ=",
  },
  "Paused": {
    val: "Paused",
    translated: false,
    src: ["src/wwwroot/record/record.tsx line 525"],
    h: "sMAADusAjpKEUapa7bSzeAnEAbEGpH+NKBgGh068Ifw=",
  },
  "Recording": {
    val: "Recording",
    translated: false,
    src: ["src/wwwroot/record/record.tsx line 531"],
    h: "s1hytW8ZlaU8eRtoTfV+4aCpW5biiyifheE3t0kouUo=",
  },
  "Playing": {
    val: "Playing",
    translated: false,
    src: ["src/wwwroot/record/record.tsx line 537"],
    h: "69elN/r6NyshRWtcjLOKso9OmdOJhvg/ix+Xy/fE+Z0=",
  },
  "Delete all": {
    val: "Delete all",
    translated: false,
    src: ["src/wwwroot/record/record.tsx line 658"],
    h: "nKzti1takFUxZyWfLTGqgvdL3dJMx6CdNwVfBH1jUYE=",
  },
  "notify-downloaded-file": {
    val: filename => `Downloaded file: ${filename}`,
    translated: false,
    src: ["src/wwwroot/record/record.tsx line 745"],
    h: "HwxJ2TVx57Qef6bXYySekL/eoBzvIEFUqBxQdxgcyCs=",
  },
  "Step took too long": {
    val: "Step took too long",
    translated: false,
    src: ["src/wwwroot/record/record.tsx line 768"],
    h: "Py3rsk0guEg0d8Ce9Lbfwzf1zP7E4Z8YPSOu165mOc0=",
  },
  "Error running recording": {
    val: "Error running recording",
    translated: false,
    src: ["src/wwwroot/record/record.tsx line 772"],
    h: "eE9Fw8G4vQpND3fFWnfGNvtN5LxCcQQecWO6fQgBmpM=",
  },
  "Open YNAB4 File": {
    val: "Open YNAB4 File",
    translated: false,
    src: ["src/ynab.ts line 400"],
    h: "BrKgvN0SgW410a7e11V3gP+FgW67iTGIY+o/cKI1Ftk=",
  },
  "Error importing": {
    val: "Error importing",
    translated: false,
    src: ["src/ynab.ts line 415"],
    h: "rekzwWcY0HRZEhFebX1fJrp4aDJ/NTPxIwWaCYAk+7k=",
  },
}
