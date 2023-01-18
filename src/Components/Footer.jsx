var React = require("react");

function Footer() {
  const curyear = new Date().getFullYear();
  return <footer>Copyright @{curyear}</footer>;
}
export default Footer;
