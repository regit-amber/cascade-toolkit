import './EndPoints.scss';
import EndPoint from "./EndPoint";
import { BiHelpCircle } from 'react-icons/bi'
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const EndPoints = ({ endpoints, updateEndPoints }) => {
  const addEndPoint = ({ alias, url, apikey }) => {
    updateEndPoints([{ alias, url, apikey }, ...endpoints]);
  }

  const updateEndpoint = (ep, { alias, url, apikey }) => {
    endpoints = ep.alias !== alias ? endpoints.filter(d => d.alias !== alias) : endpoints;
    updateEndPoints([...endpoints.map(d => d.alias === ep.alias ? { alias, url, apikey } : d)]);
  }

  const deleteEndpoint = (ep) => {
    console.log([...endpoints.filter(d => d.alias !== ep.alias)]);
    updateEndPoints([...endpoints.filter(d => d.alias !== ep.alias)]);
  }

  return (
    <div className="endpoints">
      <div className="endpoints__title">Endpoints <a className="hint" href="https://www.hannonhill.com/cascadecms/latest/developing-in-cascade/rest-api/index.html" target="_blank" rel="noreferrer"><BiHelpCircle /></a></div>
      <Tabs>
        <TabList>
          <Tab key="tab_new">NEW</Tab>
          {endpoints.map((ep, idx) => <Tab key={`tab_${idx}`}>{ep.alias}</Tab>)}
        </TabList>
        <TabPanel key="tp_new"><EndPoint key="ep_new" onSave={addEndPoint} /></TabPanel>
        {endpoints.map((ep, idx) =>
          <TabPanel key={`tp_${idx}`}>
            <EndPoint key={`ep_${idx}`} endpoint={ep} onSave={(d) => updateEndpoint(ep, d)} onDelete={() => deleteEndpoint(ep)} />
          </TabPanel>
        )}
      </Tabs>
    </div >
  )
}

export default EndPoints