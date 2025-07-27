import { useForm } from "react-hook-form";
const JobForm = () => {
  const { register, handleSubmit } = useForm();
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label id="job-title">Job Tiltle</label>
        <input
          type="text"
          placeholder="Enter job title"
          {...register("job-title", { required: true })}
        />
        <label id="comapny-name">Company</label>
        <input
          type="text"
          placeholder="Enter Company Name"
          {...register("company-name", { required: true })}
        />
        <label>Status</label>
        <select {...register("status", { required: true })}>
          <option value="applied">Applied</option>
          <option value="interview">Interview</option>
          <option value="rejected">Rejected</option>
          <option value="offer">Offer</option>
          <option value="ghosted">Ghosted</option>
        </select>
        <label>Date</label>
        <input type="date" {...register("date")} />
        <label>Link To Job post</label>
        <input
          type="text"
          {...register("link")}
          placeholder="Link to the job post"
        />
        <label>Location</label>
        <select {...register("location", { required: true })}>
          <option value="remote">Remote</option>
          <option value="hybrid">Hybrid</option>
          <option value="onsite">On-Site</option>
        </select>

        <input type="submit">Add</input>
      </form>
    </div>
  );
};

export default JobForm;
