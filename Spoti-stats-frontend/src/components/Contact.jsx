export default function Contact() {
  return (
    <div>
      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            className="form-control"
            type="text"
            placeholder="Please enter a name..."
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            className="form-control"
            type="email"
            placeholder="Enter Email..."
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Feedback</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Provide a valueable feedback..."
          ></textarea>
        </div>

        <button className="btn btn-primary" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
