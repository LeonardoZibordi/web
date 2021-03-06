import React from 'react';
import './styles.css'
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Esses são os proffy disponiveis.">
        <form id="search-teachers">

          <Input name="subject" label="Materia"/>
          <Input name="week_day" label="Dia da semana"/>
          <Input type="time" name="time" label="Hora"/>

        </form>
      </PageHeader>

      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>
  )
};

export default TeacherList;