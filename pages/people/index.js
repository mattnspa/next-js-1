import Head from 'next/head'
import Link from 'next/link';

import styles from '../../styles/People.module.css'

// function only gets run at build time (not in browser)
export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: { persons : data }
  }
}


const People = ({ persons }) => {
  return ( 
    <>
    <Head>
      <title>People List | People </title>
      <meta name='keywords' content='Persons list'/>
    </Head>
    <div>
      <h1>People:</h1>
      {/* use brackets in map as returning template code */}
      { persons.map(person => (
        <div key={ person.id }>
          <Link href={'/people/' + person.id} >
            <a className={styles.single}>
              <h3>{ person.name }</h3>
            </a>
          </Link>
        </div>
    ))}
    </div>
    </>
   );
}
 
export default People;