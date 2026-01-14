import formbackground from "../Assets/formbackground.jpg"

export default function WorkOrderForm() {
    return (
        <div className="form-page-contain">
            <form className="form-contain">
            <div className="form-top">
                <h1>Submit a Work Order </h1>
                <p>Have an issue? Fill out the form and i can help!</p>
            </div>
            <div className="form-middle">
                <span>Select Issue Type</span>
                <Select className="issue-type-dropdown">
                    <option value="setup">Setup</option>
                    <option value="troubleshooting">Troubleshooting</option>
                    <option value="printer-issues">Printer Issues</option>
                    <option value="wifi-problems">Wi-Fi Problems</option>
                    <option value="other">Other</option>
                </Select>
                <span>Describe your issue</span>
                <textarea className="issue-description" placeholder="Please provide a detailed description of the issue you are facing..."></textarea>
                <span>Contact Information</span>
                <input type="text" className="contact-info" placeholder="Your email or phone number"/>
                <button type="submit" className="submit-button-form">Submit Work Order</button>
            </div>
            <div className="form-bottom">

            </div>
        </form>
        </div>
        
    )
}