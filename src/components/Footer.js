import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>© {new Date().getFullYear()} Personal Dashboard. All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    marginTop: '60px',
    padding: '30px',
    textAlign: 'center',
    backgroundColor: '#f1f3f4',
    color: '#555',
    fontSize: '14px',
    borderTop: '1px solid #dadce0',
  },
};

export default Footer;
