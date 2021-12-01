const ContactCard = ({
  firstName = "",
  lastName = "",
  phoneNumber = "",
  profilePic = "",
}) => {
  return (
    <div className="card mb-3">
      <div className="row">
        <div className="col-2">
          <img
            className="img-fluid rounded-circle"
            src={profilePic}
            alt={`Profile of ${firstName} ${lastName}.`}
          />
        </div>
        <div className="col-1 d-flex">
          <div className="vr"></div>
        </div>
        <div className="col-3 d-flex justify-content-start align-items-center">
          <div className="card-body">
            <p className="card-text">
              {firstName} {lastName}
            </p>
            <p className="card-text">{phoneNumber}</p>
          </div>
        </div>
        <div className="col-6 d-flex justify-content-end align-items-center pe-5">
          <button
            type="button"
            className="btn-close bg-secondary rounded-circle"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
