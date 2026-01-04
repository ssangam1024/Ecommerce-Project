import React, {useState} from "react";

const FeedbackSystem = () => {
  const [readup, setReadup] = useState(0);
  const [readdown, setReaddown]= useState(0);
  
  const [perfup, setPerup] =useState(0);
  const [perfdown, setPerdown] =useState(0);
  
  const [secup, setSecup] =useState(0);
  const [secdown, setSecdown] =useState(0);
  
  const [docup, setDocup] =useState(0);
  const [docdown, setDocdown] =useState(0);
  
  const [testup, setTestup] =useState(0);
  const [testdown, setTestdown] =useState(0);
  return (
    <div className="my-0 mx-auto text-center w-mx-1200">
      <div className="flex wrap justify-content-center mt-30 gap-30">
        <div className="pa-10 w-300 card">
          <h2>Readability</h2>
          <div className="flex my-30 mx-0 justify-content-around">
            <button onClick={()=> setReadup(prev=> prev+1)} className="py-10 px-15" data-testid="upvote-btn-0">
              👍 Upvote
            </button>
            <button onClick={() => setReaddown(prev=> prev+1)} className="py-10 px-15 danger" data-testid="downvote-btn-0">
              👎 Downvote
            </button>
          </div>
          <p className="my-10 mx-0" data-testid="upvote-count-0">
            Upvotes: <strong>{readup}</strong>
          </p>
          <p className="my-10 mx-0" data-testid="downvote-count-0">
            Downvotes: <strong>{readdown}</strong>
          </p>
        </div>
  
        <div className="pa-10 w-300 card">
          <h2>Performance</h2>
          <div className="flex my-30 mx-0 justify-content-around">
            <button onClick={()=> setPerup(prev=> prev+1)} className="py-10 px-15" data-testid="upvote-btn-1">
              👍 Upvote
            </button>
            <button onClick={() => setPerdown(prev=> prev+1)} className="py-10 px-15 danger" data-testid="downvote-btn-1">
              👎 Downvote
            </button>
          </div>
          <p className="my-10 mx-0" data-testid="upvote-count-1">
            Upvotes: <strong>{perfup}</strong>
          </p>
          <p className="my-10 mx-0" data-testid="downvote-count-1">
            Downvotes: <strong>{perfdown}</strong>
          </p>
        </div>

         <div className="pa-10 w-300 card">
          <h2>Security</h2>
          <div className="flex my-30 mx-0 justify-content-around">
            <button onClick={()=> setSecup(prev=> prev+1)} className="py-10 px-15" data-testid="upvote-btn-2">
              👍 Upvote
            </button>
            <button onClick={() => setSecdown(prev=> prev+1)} className="py-10 px-15 danger" data-testid="downvote-btn-2">
              👎 Downvote
            </button>
          </div>
          <p className="my-10 mx-0" data-testid="upvote-count-2">
            Upvotes: <strong>{secup}</strong>
          </p>
          <p className="my-10 mx-0" data-testid="downvote-count-2">
            Downvotes: <strong>{secdown}</strong>
          </p>
        </div>
        
        <div className="pa-10 w-300 card">
          <h2>Documentation</h2>
          <div className="flex my-30 mx-0 justify-content-around">
            <button onClick={()=> setDocup(prev=> prev+1)} className="py-10 px-15" data-testid="upvote-btn-3">
              👍 Upvote
            </button>
            <button onClick={() => setDocdown(prev=> prev+1)} className="py-10 px-15 danger" data-testid="downvote-btn-3">
              👎 Downvote
            </button>
          </div>
          <p className="my-10 mx-0" data-testid="upvote-count-3">
            Upvotes: <strong>{docup}</strong>
          </p>
          <p className="my-10 mx-0" data-testid="downvote-count-3">
            Downvotes: <strong>{docdown}</strong>
          </p>
        </div>

        <div className="pa-10 w-300 card">
          <h2>Testing</h2>
          <div className="flex my-30 mx-0 justify-content-around">
            <button onClick={()=> setTestup(prev=> prev+1)} className="py-10 px-15" data-testid="upvote-btn-4">
              👍 Upvote
            </button>
            <button onClick={() => setTestdown(prev=> prev+1)} className="py-10 px-15 danger" data-testid="downvote-btn-4">
              👎 Downvote
            </button>
          </div>
          <p className="my-10 mx-0" data-testid="upvote-count-4">
            Upvotes: <strong>{testup}</strong>
          </p>
          <p className="my-10 mx-0" data-testid="downvote-count-4">
            Downvotes: <strong>{testdown}</strong>
          </p>
        </div>
       </div>
      </div>
     );
  
};

export default FeedbackSystem;
