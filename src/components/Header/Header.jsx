import css from './Header.module.scss';

const Header = ({ Portfolio, About, Feedback }) => {
  return (
    <div>
      <span></span>
      <div>
        <ul>
          <li>
            <a href="#Portfolio">{Portfolio}</a>
          </li>
          <li>
            <a href="#About">{About}</a>
          </li>
          <li>
            <a href="#Feedback">{Feedback}</a>
          </li>
          <address>
            <ul>
              <li>
                <a href=""></a>
              </li>
              <li>
                <a href=""></a>
              </li>
            </ul>
          </address>
        </ul>
      </div>
    </div>
  );
};
export default Header;