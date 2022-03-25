import { useState } from "react"
import './EndPoint.scss';

const EndPoint = ({ endpoint, onSave, onDelete}) => {
  endpoint = endpoint || {}
  const [alias, setAlias] = useState(endpoint.alias || '');
  const [url, setUrl] = useState(endpoint.url || '');
  const [apikey, setApiKey] = useState(endpoint.apikey || '');
  const onSubmit = (e) => {
    e.preventDefault();
    onSave({alias, url, apikey});

    setAlias(endpoint.alias || "")
    setUrl(endpoint.url || "")
    setApiKey(endpoint.apikey || "")
  }
  return (
    <form className="endpoint form" onSubmit={onSubmit}>
      <div className="form__group">
        <label className="form__label">Alias</label>
        <input className="form__input" type="text" placeholder="cascade" value={alias} onChange={(e) => setAlias(e.target.value)} />
      </div>
      <div className="form__group">
        <label className="form__label">Host</label>
        <input className="form__input" type="text" placeholder="http://cascade/api/v1" value={url} onChange={(e) => setUrl(e.target.value)} />
      </div>
      <div className="form__group">
        <label className="form__label">Api Key</label>
        <input className="form__input" type="text" placeholder="ApiKey" value={apikey} onChange={(e) => setApiKey(e.target.value)} />
      </div>

      <div className="form__group form__group--buttons">
        <button type="submit" className="btn btn--green">Save</button>
        {onDelete && <button className="btn btn--green" onClick={onDelete}>Delete</button>}
      </div>
    </form>
  )
}

export default EndPoint