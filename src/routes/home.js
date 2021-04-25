export const home = {
  method: "get",
  path: "/home",
  handler: (req, res) => {
    res.send("Welcome!");
  },
};
