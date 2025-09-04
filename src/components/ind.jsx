const CreateCard = ({ card }) => {
  const {
    name = "none",
    lastName = "none",
    Email = "none",
    Title = "none",
    company = "none",
    companySize = "none",
    Comment = "none",
  } = card;

  return (
    <>
      <h1>first name : {name}</h1>
      <h1>lastName : {lastName}</h1>
      <h1>Email: {Email}</h1>
      <h1>Title: {Title}</h1>
      <h1>company : {company}</h1>
      <h1>companySize: {companySize}</h1>
      <h1>Comment : {Comment}</h1>
    </>
  );
};
export default CreateCard;
