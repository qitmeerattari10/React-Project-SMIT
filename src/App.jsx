// import { useEffect, useState } from "react";
// import "./App.css";

// function App() {
//     const [name, setName] = useState("");

//     const [yes, setYes] = useState(0);
//     const [no, setNo] = useState(0);

//     const [votes, setVotes] = useState([]);

//     const [message, setMessage] = useState("");


//     // Local Storage se data load
//     useEffect(() => {
//         const savedYes = localStorage.getItem("yes");
//         const savedNo = localStorage.getItem("no");
//         const savedVotes = localStorage.getItem("votes");

//         if (savedYes) {
//             setYes(Number(savedYes));
//         }

//         if (savedNo) {
//             setNo(Number(savedNo));
//         }

//         if (savedVotes) {
//             setVotes(JSON.parse(savedVotes));
//         }
//     }, []);


//     // YES Vote
//     function yesVote() {
//         if (name.trim() === "") {
//             setMessage("Please enter your name");
//             return;
//         }

//         const userName = name.trim().toLowerCase();

//         const alreadyVoted = votes.some(
//             (vote) => vote.name === userName
//         );

//         if (alreadyVoted) {
//             setMessage("You have already voted");
//             return;
//         }

//         const newVote = {
//             name: userName,
//             vote: "YES"
//         };

//         const updatedVotes = [...votes, newVote];
//         const newYes = yes + 1;

//         setYes(newYes);
//         setVotes(updatedVotes);

//         localStorage.setItem("yes", newYes);
//         localStorage.setItem(
//             "votes",
//             JSON.stringify(updatedVotes)
//         );

//         setMessage("Your YES vote has been recorded");

//         setName("");
//     }


//     // NO Vote
//     function noVote() {
//         if (name.trim() === "") {
//             setMessage("Please enter your name");
//             return;
//         }

//         const userName = name.trim().toLowerCase();

//         const alreadyVoted = votes.some(
//             (vote) => vote.name === userName
//         );

//         if (alreadyVoted) {
//             setMessage("You have already voted");
//             return;
//         }

//         const newVote = {
//             name: userName,
//             vote: "NO"
//         };

//         const updatedVotes = [...votes, newVote];
//         const newNo = no + 1;

//         setNo(newNo);
//         setVotes(updatedVotes);

//         localStorage.setItem("no", newNo);
//         localStorage.setItem(
//             "votes",
//             JSON.stringify(updatedVotes)
//         );

//         setMessage("Your NO vote has been recorded");

//         setName("");
//     }


//     return (
//         <div className="app">

//             <div className="voting-box">

//                 <h1>Voting App</h1>


//                 {/* COUNTERS */}

//                 <div className="counters">

//                     <div className="counter yes-counter">
//                         <span>YES</span>
//                         <strong>{yes}</strong>
//                     </div>

//                     <div className="counter no-counter">
//                         <span>NO</span>
//                         <strong>{no}</strong>
//                     </div>

//                 </div>


//                 {/* QUESTION */}

//                 <h2>
//                     Kya next class mein CSS ka test hona chahiye?
//                 </h2>


//                 {/* NAME INPUT */}

//                 <input
//                     type="text"
//                     placeholder="Enter your name"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                 />


//                 {/* BUTTONS */}

//                 <div className="buttons">

//                     <button
//                         className="yes-button"
//                         onClick={yesVote}
//                     >
//                         YES
//                     </button>

//                     <button
//                         className="no-button"
//                         onClick={noVote}
//                     >
//                         NO
//                     </button>

//                 </div>


//                 {/* MESSAGE */}

//                 {message && (
//                     <p className="message">
//                         {message}
//                     </p>
//                 )}


//                 {/* VOTE LIST */}

//                 <div className="vote-list">

//                     <h3>Voting Results</h3>

//                     {votes.length === 0 ? (
//                         <p className="no-votes">
//                             Abhi kisi ne vote nahi kiya.
//                         </p>
//                     ) : (
//                         votes.map((vote, index) => (
//                             <div
//                                 className="vote-item"
//                                 key={index}
//                             >
//                                 <span>
//                                     {vote.name}
//                                 </span>

//                                 <strong
//                                     className={
//                                         vote.vote === "YES"
//                                             ? "yes-text"
//                                             : "no-text"
//                                     }
//                                 >
//                                     voted {vote.vote}
//                                 </strong>
//                             </div>
//                         ))
//                     )}

//                 </div>

//             </div>

//         </div>
//     );
// }

// export default App;












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
            <div>
                <button>YES: {yes}</button>
                <button>NO: {no}</button>
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