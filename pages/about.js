import { Component } from 'react';
import Link from 'next/link';
import Header from '../components/header';

class AboutPage extends Component {
  static getInitialProps() {
    const isServer = typeof window === 'undefined';
    return { isServer };
  }

  render() {
    return (
      <main>
        <Header />
        <section>
          <Link href="/">
            <a>Go to Home</a>
          </Link>
          <p>Brandon Knight, Software Engineer</p>
        </section>
      </main>
    );
  }
}

export default AboutPage;
