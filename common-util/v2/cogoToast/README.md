# CogoToast


### Import
```javascript
import cogoToast from '../common-util/v2/cogoToast';

```

### Usage

```javascript
cogoToast.success('This is a Success Message', options);
cogoToast.warn('This is a Warn Message', options);
cogoToast.error('This is a Error Message', options);
cogoToast.info('This is a Info Message', options);
cogoToast.loading('This is a Loading Message', options);

```

### Options

The options parameter is optional.

#### Default Options

```javascript
options = {
  heading: '',
  hideAfter: 2.5 // in seconds,
  position: 'top-right' // Possible Values - 'top-left | top-center | top-right | bottom-left | bottom-center | bottom-right'
};
```
