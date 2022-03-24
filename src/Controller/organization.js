const Organization = require("../models/organization");
const postOrganization = async (req, res) => {
  try {
    const organization = Organization(req.body);
    const saveOrganization = await organization.save();
    res.send(saveOrganization);
  } catch (error) {
    res.status(400).send(error);
  }
};
module.exports = postOrganization;
