import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Upload, Button } from 'antd';
import axios from 'axios';

import { getSignedUrl } from 'apis/public-apis';

class ControlMultipleUploadButton extends Component {
  static propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.arrayOf(PropTypes.shape({})),
  };

  static defaultProps = {
    onChange: () => {},
    value: [],
  };

  onUpload = async (obj) => {
    try {
      const { name, type } = (obj || {}).file || {};
      const signedUrl = await getSignedUrl({ filename: name });
      const formData = new FormData();
      formData.append('file', (obj || {}).file);
      const config = { headers: { 'Content-Type': type } };
      await axios.put(signedUrl, (obj || {}).file, type ? config : undefined);
      (obj || {}).onSuccess({ url: signedUrl.replace(/(\?.*)?/g, '') });
    } catch (err) {
      (obj || {}).onError(err);
    }
  };

  onChange = (info) => {
    const { onChange } = this.props;
    let { fileList } = info;

    fileList = fileList.map((f) => {
      const f2 = f;
      if (f.response) {
        f2.url = f.response.url;
      }
      return f2;
    });
    onChange(fileList);
  };

  render() {
    const { value } = this.props;
    return (
      <Upload
        action={() => false}
        customRequest={this.onUpload}
        onChange={this.onChange}
        fileList={value}
      >
        <Button>Multiple Uploads</Button>
      </Upload>
    );
  }
}

export default ControlMultipleUploadButton;
