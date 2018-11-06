var app = new Vue({
  el: '#app',
  mounted: function () {
    this.onloadAlert()
  },
  data: {
    functionName: '',
    baseURL: '',
    resource: '',
    jsonBody: '',
    httpMethod: '',
    authHeaders: [],
    contentTypeHeader: '',
    optionalHeaders: [],
    selectedHeaders: [],
    params: [
      {
        key: '',
        value: '',
      },
      {
        key: '',
        value: '',
      },
      {
        key: '',
        value: '',
      },
      {
        key: '',
        value: '',
      }
    ],
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.toUpperCase()
    }
  },
  methods: {
    onloadAlert: function () {
      alert("This sample code generator is still in Beta. By clicking OK, you agree to test all code before publishing.")
    }
  }
})
