



import { useEffect, useState } from "react";
import "./App.css";

function App() {


    const [yes, setYes] = useState(0);
    const [no, setNo] = useState(0);
    const [name, setName] = useState("");
    const [votes, setVotes] = useState([]);


    function yesVote() {
        if (name.trim() === "") {
            alert("Please enter your name");
            return;
        }

        const alreadyVoted = votes.some(
            (vote) => vote.name.toLowerCase() === name.trim().toLowerCase()
        );

        if (alreadyVoted) {
            alert("You have already voted");
            return;
        }

        const newVote = {
            name: name.trim(),
            vote: "YES"
        };

        const updatedVotes = [...votes, newVote];
        const newYes = yes + 1;

        setVotes(updatedVotes);
        setYes(newYes);
        setName("");

        localStorage.setItem("votes", JSON.stringify(updatedVotes));
        localStorage.setItem("yes", newYes);
    }

    function noVote() {
        if (name.trim() === "") {
            alert("Please enter your name");
            return;
        }

        const alreadyVoted = votes.some(
            (vote) => vote.name.toLowerCase() === name.trim().toLowerCase()
        );

        if (alreadyVoted) {
            alert("You have already voted");
            return;
        }

        const newVote = {
            name: name.trim(),
            vote: "NO"
        };

        const updatedVotes = [...votes, newVote];
        const newNo = no + 1;

        setVotes(updatedVotes);
        setNo(newNo);
        setName("");

        localStorage.setItem("votes", JSON.stringify(updatedVotes));
        localStorage.setItem("no", newNo);
    }



    function noVote() {
        if (name.trim() === "") {
            alert("Please enter your name");
            return;
        }

        const alreadyVoted = votes.some(
            (vote) => vote.name.toLowerCase() === name.trim().toLowerCase()
        );

        if (alreadyVoted) {
            alert("You have already voted");
            return;
        }

        const newVote = {
            name: name.trim(),
            vote: "NO"
        };

        const updatedVotes = [...votes, newVote];
        const newNo = no + 1;

        setVotes(updatedVotes);
        setNo(newNo);
        setName("");

        localStorage.setItem("votes", JSON.stringify(updatedVotes));
        localStorage.setItem("no", newNo);
    }

    return (
        <div>
            <h1> Voting App </h1>
            <h1> Kya next class mein CSS ka test hona chahiye? </h1>
            <div>
                <p>YES: {yes}</p>
                <p>NO: {no}</p>
            </div>

            <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <button onClick={yesVote}>
                YES
            </button>

            <button onClick={noVote}>
                NO
            </button>

            <div>
                <h2>Voting Results</h2>

                {votes.map((vote, index) => (
                    <p key={index}>
                        {vote.name} voted {vote.vote}
                    </p>
                ))}
            </div>



        </div>
    );

}

export default App