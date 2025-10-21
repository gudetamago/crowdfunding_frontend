import { useState } from "react";
import postPledge from "../api/post-pledge.js";
import { useNavigate } from "react-router-dom";

function PledgeForm(props) {

    // console.log(props.campaignId);

    // const navigate = useNavigate();

    const [amount, setAmount] = useState();
    const [comment, setComment] = useState("");
    const [anonymous, setAnonymous] = useState(true);

    const pledgeData = {
      amount: parseFloat(amount),
      comment: comment,
      anonymous: anonymous,       // <-- include this in your data
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
                    // navigate("/");
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }

  return (
    <form>
      <div>
        <label htmlFor="amount">Amount:</label>
        <input
            type="number"
            min="1"
            id="amount"
            value={amount}
            placeholder="Enter amount"
            onChange={(event) => setAmount(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="comment">Comment:</label>
        <input
            type="text"
            id="comment"
            placeholder="Comment"
            value={comment}
            onChange={(event) => setComment(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="anonymous">Anonymous?</label>
        <input
            type="checkbox"
            checked={anonymous}
            id="anonymous"
            onChange={(event) => setAnonymous(event.target.checked)}
        />
      </div>
      
      <button type="submit" onClick={handleSubmit}>Add Pledge</button>
    </form>
  );
}

export default PledgeForm;