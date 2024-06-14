const mailer = async (req, res) => {
  const { fullName } = req.body;
  console.log(fullName);
};
export { mailer };
