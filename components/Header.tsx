import Link from 'next/link';

const Header = () => {
  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        <ul style={styles.navList}>
          <li style={styles.navItem}>
            <Link href="/store">Store</Link>
          </li>
          <li style={styles.navItem}>
            <Link href="/blog">Blog</Link>
          </li>
          <li style={styles.navItem}>
            <Link href="/about">About Us</Link>
          </li>
          <li style={styles.navItem}>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <ul style={styles.navList}>
          <li style={styles.navItem}>
            <Link href="/account">Account</Link>
          </li>
          <li style={styles.navItem}>
            <Link href="/cart">Cart</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 20px',
    backgroundColor: '#f5f5f5',
    borderBottom: '1px solid #ddd',
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
  navList: {
    display: 'flex',
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  navItem: {
    margin: '0 15px',
  },
};

export default Header;
