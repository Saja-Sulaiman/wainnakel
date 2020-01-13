import React from 'react';
import { Button, Icon } from 'antd';

const SuggestionButton = () => {
    return (
        <div className="button button-group">
          <Button className="button" size="large"><Icon type="sliders" style={{ rotate: '90'}}/></Button>
          <Button className="button suggest-button" size="large" >اقترح</Button>
        </div>
    );
}

export default SuggestionButton;