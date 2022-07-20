import type { List } from '../util/api';
import React, { useEffect, useState } from 'react';
import Page from '../components/Page';
import api from '../util/api';
import { Link } from 'react-router-dom';

function Home() {
  const [lists, setLists] = useState<Array<List>>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  useEffect(() => {
    api.get.lists().then((lists: Array<List>) => {
      setLists(lists);
    }).catch(e => {
      console.error(e);
    }).finally(() => {
      setIsLoading(false);
    });
  });
  return (
    <Page>
      {isLoading 
      ? <p>Loading...</p> 
      : <ul>
        {lists.map(list => <li><Link to={`/list/${list.id}`}>{list.name}</Link></li>)}
      </ul>}
    </Page>
  );
}

export default Home;
