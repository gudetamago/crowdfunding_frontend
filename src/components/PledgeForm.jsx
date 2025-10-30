import { useState } from "react";
import postPledge from "../api/post-pledge.js";
import { useNavigate } from "react-router-dom";
import "./Forms.css";

function PledgeForm(props) {
    const navigate = useNavigate();

    const [amount, setAmount] = useState("");
    const [comment, setComment] = useState("");
    const [anonymous, setAnonymous] = useState(false);

    const pledgeData = {
        amount: parseFloat(amount),
        comment: comment,
        anonymous: anonymous,
        campaign: props.campaignId,
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (pledgeData.amount) {
            postPledge(pledgeData.amount,
                pledgeData.comment,
                pledgeData.anonymous,
                pledgeData.campaign)
                .then((response) => {
                    console.log(response);
                    navigate(`/thank-you/${pledgeData.campaign}`);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }

    return (
        <div className="form-container" style={{ marginTop: '3rem' }}>
            <h3 className="form-title" style={{ fontSize: '1.5rem' }}>Make a Pledge</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="amount" className="form-label">Pledge Amount:</label>
                    <input
                        type="number"
                        min="1"
                        step="0.01"
                        id="amount"
                        className="form-input"
                        value={amount}
                        placeholder="Enter amount (e.g. 50.00)"
                        onChange={(event) => setAmount(event.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="comment" className="form-label">Comment (optional):</label>
                    <textarea
                        id="comment"
                        className="form-textarea"
                        placeholder="Add a supportive message..."
                        value={comment}
                        onChange={(event) => setComment(event.target.value)}
                        style={{ minHeight: '80px' }}
                    />
                </div>
                <div className="form-group">
                    <div className="form-checkbox-group">
                        <input
                            type="checkbox"
                            id="anonymous"
                            className="form-checkbox"
                            checked={anonymous}
                            onChange={(event) => setAnonymous(event.target.checked)}
                        />
                        <label htmlFor="anonymous" className="form-label" style={{ margin: 0 }}>
                            Make this pledge anonymous
                        </label>
                    </div>
                </div>

                <button type="submit" className="form-button">Submit Pledge</button>
            </form>
        </div>
    );
}

export default PledgeForm;