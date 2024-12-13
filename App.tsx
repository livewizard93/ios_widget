/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { open } from 'react-native-nitro-sqlite';

function App() {
  useEffect(() => {
    createSQliteDB();
    fetchData();
  }, []);

  const createSQliteDB = () => {
    try {
      const db = open({
        name: "celebrations.sqlite",
      });

      db.execute('DROP TABLE celebrations');
      db.execute(`CREATE TABLE celebrations (
        id text PRIMARY KEY NOT NULL, 
        user_id text NOT NULL, 
        created_at text DEFAULT CURRENT_TIMESTAMP,
        modified_at text DEFAULT CURRENT_TIMESTAMP,
        synced_at text,
        category text NOT NULL DEFAULT 'Birthday',
        kind_alias text NOT NULL DEFAULT 'None',
        subkind text,
        calendar_id text,
        calendar_event_id text,
        derived_from_id text,
        person_id text NOT NULL,
        date Date,
        day integer,
        month integer,
        year_of_birth integer,
        first_name text NOT NULL,
        last_name text,
        nickname text,
        relationship text DEFAULT Null,
        photo_uri text,
        gender text NOT NULL DEFAULT 'unknown' CHECK("gender" IN ('male', 'female', 'unknown')),
        action_alias text NOT NULL DEFAULT 'None',
        action_registered_at text,
        action_completed_at text,
        action_metadata text DEFAULT '{}'
      )`);

      db.execute(`INSERT INTO celebrations
        VALUES (
          '28bbe674-2134-43c2-8ee7-2bf0077d7a86',
          '24e2c6d9-1159-4a66-8da2-2eed954181c8',
          '2024-12-10 21:56:20',
          '2024-12-10 21:56:20',
          '',
          'Birthday',
          'GenericBirthday',
          '',
          '',
          '',
          '',
          '73f2560c-f34d-4bd9-8196-c91a894fa0f4',
          '',
          14,
          11,
          2018,
          'Martin',
          '',
          '',
          '',
          '',
          'unknown',
          'None',
          '',
          '',
          ''
        );
      `);
      db.execute(`INSERT INTO celebrations
        VALUES (
          '406d3ba6-9540-4805-a75e-c04fa6f11deb',
          '24e2c6d9-1159-4a66-8da2-2eed954181c8',
          '2024-12-10 21:57:06',
          '2024-12-10 21:57:06',
          '',
          'Birthday',
          'FamilyMemberBirthday',
          'Son',
          '',
          '',
          '',
          'ff57964d-5b8c-456b-834e-4c4d9cca6deb',
          '',
          8,
          6,
          '',
          'Tobias',
          '',
          '',
          'Son',
          'https://picsum.photos/id/582/600/300',
          'unknown',
          'None',
          '',
          '',
          ''
        );
      `);
      console.log('step 5');
     
    } catch (e: any) {
      console.error('Something went wrong executing SQL commands:', e.message);
    }
  };

  const fetchData = () => {
    try {
      const db = open({
        name: "celebrations.sqlite",
      });

      const { rows } = db.execute('SELECT * FROM celebrations');
      console.log('rows: ', rows);
    } catch (e: any) {
      console.error('Something went wrong executing SQL commands:', e.message);
    }
  };

  return (
    <SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
});

export default App;
