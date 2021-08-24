import React, {useEffect, useState} from 'react'
import { Table, Space, Input, Modal, Button } from 'antd';
import { fetchJson } from '../../api'
import { PersonType } from '../../types'
import Person from '../Person'

const { Search } = Input;

function People() {
  const [people, setPeople] = useState<PersonType[]>([]);
  const [peopleFiltered, setPeopleFiltered] = useState<PersonType[]>([]);
  //
  const [loading, setLoading] = useState<boolean>(true);
  const [searching, setSearching] = useState<boolean>(false);
  //
  const [isModalVisible, setVisible] = useState(false);
  const [selectedPerson, setPerson] = useState<PersonType|undefined>(undefined);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Height',
      dataIndex: 'height',
      key: 'height',
    },
    {
      title: 'Mass',
      dataIndex: 'mass',
      key: 'mass',
    },
    {
      title: 'Hair Color',
      dataIndex: 'hair_color',
      key: 'hair_color',
    },
    {
      title: 'Skin Color',
      dataIndex: 'skin_color',
      key: 'skin_color',
    },
    {
      title: 'Eye Color',
      dataIndex: 'eye_color',
      key: 'eye_color',
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
    },
    {
      title: "View Details",
      key: 'action',
      render: (text: any, record: any) => (
        <Space size="middle">
          <Button onClick={() => {
            setPerson(record);
            setVisible(true)
            }
          }>View</Button>
        </Space>
      ),
    },
  ];


  useEffect(() => {
    fetchJson<{ results: PersonType[] }>('people')
      .then(peopleResponse => {
        setPeople(peopleResponse.results);
        setLoading(false);
      });
  }, []);

  const onSearch = (input: string) => {
    const filter = people.filter(f => f.name.toLowerCase().includes(input.toLowerCase()));
    setPeopleFiltered([...filter])
    setSearching(input !== "");
  };

  const hideModal = () => {
    setVisible(false);
    setPerson(undefined);
  };

  return (
    <div style={{padding:"25px"}}> 
      <Search width={"100%"} 
        placeholder="Search " 
        allowClear 
        onSearch={onSearch} 
        onChange={(e) =>onSearch(e.target?.value)}
      
      />
      <Table 
        columns={columns} 
        key={"name"}
        dataSource={searching ? peopleFiltered :  people} 
        pagination={false}
        loading={loading}
      />
      <Modal
          title="View Details"
          style={{ top: 20 }}
          visible={isModalVisible}
          width={"90%"}
          footer={null}
          onOk={hideModal}
          onCancel={hideModal}
          destroyOnClose={true}
        >
          <Person person={selectedPerson} />
        </Modal>
    </div>
  )
}

export default People
