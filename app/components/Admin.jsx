import React from 'react';
import * as Redux from 'react-redux';
import {Link} from 'react-router';

export class Admin extends React.Component{
  render() {
    return (
      <div>
        <div className="row">
                <div className="page page-actions col-sm-11">
                  <div className="col-sm-10 ">
                      <h1 className="page-header">Admin</h1>
                        <h3 className="text-center"><b>Subjects</b></h3>
                        <div className="list-group ">
                          <Link to="/Mathematics" className="list-group-item">Mathematics <span className="label label-primary pull-right">Edit Test</span></Link>
                          <Link to="" className="list-group-item">English Language <span className="label label-primary pull-right">Edit Test</span></Link>
                          <Link to="" className="list-group-item">Biology <span className="label label-primary pull-right">Edit Test</span></Link>
                          <Link to="" className="list-group-item">Agriculture <span className="label label-primary pull-right">Edit Test</span></Link>
                          <Link to="" className="list-group-item">Government <span className="label label-primary pull-right">Edit Test</span></Link>
                          <Link to="" className="list-group-item">Islamic Studies <span className="label label-primary pull-right">Edit Test</span></Link>
                          <Link to="" className="list-group-item">Chemistry <span className="label label-primary pull-right">Edit Test</span></Link>
                          <Link to="" className="list-group-item">Physics <span className="label label-primary pull-right">Edit Test</span></Link>
                          <Link to="" className="list-group-item">Christianity Studies <span className="label label-primary pull-right">Edit Test</span></Link>
                          <Link to="" className="list-group-item">Economics <span className="label label-primary pull-right">Edit Test</span></Link>
                          <Link to="" className="list-group-item">Hausa Language <span className="label label-primary pull-right">Edit Test</span></Link>
                        </div>
                  </div>
                </div>
              </div>
      </div>
    );
  }

}

export default Redux.connect()(Admin);
