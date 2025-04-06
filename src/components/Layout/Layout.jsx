import css from './Layout.module.css';
import img from '../../assets/images/s15.png';

function Layout({ children }) {
  return (
    <main className={css.app}>
      <img
        src={img}
        alt="telephone"
        style={{
          height: '640px',
          width: '680px',
          position: ' absolute;',

          zIndex: '-1',
          objectFit: 'cover',
          filter: 'blur(100px)',
          opacity: '0.3',
        }}
      />
      <div className={css.contentWrapper}>{children}</div>
    </main>
  );
}

export default Layout;
