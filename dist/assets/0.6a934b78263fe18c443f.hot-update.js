webpackHotUpdate(0,{

/***/ 360:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(78), RootInstanceProvider = __webpack_require__(86), ReactMount = __webpack_require__(88), React = __webpack_require__(156); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(156);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n__webpack_require__(351);\n//require('styles/bootstrap/dist/css/bootstrap.css');\n//require('../../node_modules/bootstrap/dist/css/bootstrap.min.css');\n\nvar Entradas = function (_React$Component) {\n  _inherits(Entradas, _React$Component);\n\n  function Entradas(props) {\n    _classCallCheck(this, Entradas);\n\n    var _this = _possibleConstructorReturn(this, (Entradas.__proto__ || Object.getPrototypeOf(Entradas)).call(this, props));\n\n    _this.state = { value: '1' };\n    _this.handleChange = _this.handleChange.bind(_this);\n    //this.handleSubmit = this.handleSubmit.bind(this);\n    return _this;\n  }\n\n  _createClass(Entradas, [{\n    key: 'handleChange',\n    value: function handleChange(event) {\n      console.log('Hola mundo!' + this.state.value);\n      var valor = event.target.value;\n      this.setState({ value: event.target.value });\n      console.log('Hola mundo!' + valor);\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          'h2',\n          null,\n          'Datos de entrada para t\\xFA afd'\n        ),\n        _react2.default.createElement(\n          'div',\n          { className: 'form-group' },\n          _react2.default.createElement(\n            'label',\n            { 'for': '' },\n            'N\\xFAmero de estados (Q):'\n          ),\n          _react2.default.createElement(\n            'select',\n            { value: this.state.value, onChange: this.handleChange, className: 'form-control', name: '' },\n            _react2.default.createElement(\n              'option',\n              { value: '1' },\n              'q0'\n            ),\n            _react2.default.createElement(\n              'option',\n              { value: '2' },\n              'q1'\n            ),\n            _react2.default.createElement(\n              'option',\n              { value: '3' },\n              'q2'\n            ),\n            _react2.default.createElement(\n              'option',\n              { value: '4' },\n              'q3'\n            ),\n            _react2.default.createElement(\n              'option',\n              { value: '5' },\n              'q4'\n            ),\n            _react2.default.createElement(\n              'option',\n              { value: '6' },\n              'q5'\n            ),\n            _react2.default.createElement(\n              'option',\n              { value: '7' },\n              'q6'\n            ),\n            _react2.default.createElement(\n              'option',\n              { value: '8' },\n              'q7'\n            ),\n            _react2.default.createElement(\n              'option',\n              { value: '9' },\n              'q8'\n            ),\n            _react2.default.createElement(\n              'option',\n              { value: '10' },\n              'q9'\n            )\n          )\n        ),\n        _react2.default.createElement(\n          'div',\n          { className: 'form-group' },\n          _react2.default.createElement(\n            'label',\n            { 'for': '' },\n            'Elementos del alfabeto (\\u03A3):'\n          ),\n          _react2.default.createElement(\n            'select',\n            { className: 'form-control', name: '' },\n            _react2.default.createElement(\n              'option',\n              { value: '1' },\n              'a'\n            ),\n            _react2.default.createElement(\n              'option',\n              { value: '2' },\n              'b'\n            ),\n            _react2.default.createElement(\n              'option',\n              { value: '3' },\n              'c'\n            ),\n            _react2.default.createElement(\n              'option',\n              { value: '4' },\n              'd'\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return Entradas;\n}(_react2.default.Component);\n\nexports.default = Entradas;\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(355); if (makeExportsHot(module, __webpack_require__(156))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot not apply hot update to \" + \"Entradas.js\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9FbnRyYWRhcy5qcz9iMjc0Il0sIm5hbWVzIjpbInJlcXVpcmUiLCJFbnRyYWRhcyIsInByb3BzIiwic3RhdGUiLCJ2YWx1ZSIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJ2YWxvciIsInRhcmdldCIsInNldFN0YXRlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBR0E7Ozs7Ozs7Ozs7OztBQUhBLG1CQUFBQSxDQUFRLEdBQVI7QUFDQTtBQUNBOztJQUdxQkMsUTs7O0FBQ25CLG9CQUFZQyxLQUFaLEVBQWtCO0FBQUE7O0FBQUEsb0hBQ1ZBLEtBRFU7O0FBRWhCLFVBQUtDLEtBQUwsR0FBYSxFQUFDQyxPQUFPLEdBQVIsRUFBYjtBQUNBLFVBQUtDLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkMsSUFBbEIsT0FBcEI7QUFDQTtBQUpnQjtBQUtqQjs7OztpQ0FFWUMsSyxFQUFPO0FBQ2xCQyxjQUFRQyxHQUFSLENBQVksZ0JBQWdCLEtBQUtOLEtBQUwsQ0FBV0MsS0FBdkM7QUFDQSxVQUFJTSxRQUFRSCxNQUFNSSxNQUFOLENBQWFQLEtBQXpCO0FBQ0EsV0FBS1EsUUFBTCxDQUFjLEVBQUNSLE9BQU9HLE1BQU1JLE1BQU4sQ0FBYVAsS0FBckIsRUFBZDtBQUNBSSxjQUFRQyxHQUFSLENBQVksZ0JBQWdCQyxLQUE1QjtBQUNEOzs7NkJBRU87QUFDTixhQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERjtBQUVFO0FBQUE7QUFBQSxZQUFLLFdBQVUsWUFBZjtBQUNFO0FBQUE7QUFBQSxjQUFPLE9BQUksRUFBWDtBQUFBO0FBQUEsV0FERjtBQUVFO0FBQUE7QUFBQSxjQUFRLE9BQU8sS0FBS1AsS0FBTCxDQUFXQyxLQUExQixFQUFpQyxVQUFVLEtBQUtDLFlBQWhELEVBQThELFdBQVUsY0FBeEUsRUFBdUYsTUFBSyxFQUE1RjtBQUNFO0FBQUE7QUFBQSxnQkFBUSxPQUFNLEdBQWQ7QUFBQTtBQUFBLGFBREY7QUFFRTtBQUFBO0FBQUEsZ0JBQVEsT0FBTSxHQUFkO0FBQUE7QUFBQSxhQUZGO0FBR0U7QUFBQTtBQUFBLGdCQUFRLE9BQU0sR0FBZDtBQUFBO0FBQUEsYUFIRjtBQUlFO0FBQUE7QUFBQSxnQkFBUSxPQUFNLEdBQWQ7QUFBQTtBQUFBLGFBSkY7QUFLRTtBQUFBO0FBQUEsZ0JBQVEsT0FBTSxHQUFkO0FBQUE7QUFBQSxhQUxGO0FBTUU7QUFBQTtBQUFBLGdCQUFRLE9BQU0sR0FBZDtBQUFBO0FBQUEsYUFORjtBQU9FO0FBQUE7QUFBQSxnQkFBUSxPQUFNLEdBQWQ7QUFBQTtBQUFBLGFBUEY7QUFRRTtBQUFBO0FBQUEsZ0JBQVEsT0FBTSxHQUFkO0FBQUE7QUFBQSxhQVJGO0FBU0U7QUFBQTtBQUFBLGdCQUFRLE9BQU0sR0FBZDtBQUFBO0FBQUEsYUFURjtBQVVFO0FBQUE7QUFBQSxnQkFBUSxPQUFNLElBQWQ7QUFBQTtBQUFBO0FBVkY7QUFGRixTQUZGO0FBaUJFO0FBQUE7QUFBQSxZQUFLLFdBQVUsWUFBZjtBQUNFO0FBQUE7QUFBQSxjQUFPLE9BQUksRUFBWDtBQUFBO0FBQUEsV0FERjtBQUVFO0FBQUE7QUFBQSxjQUFRLFdBQVUsY0FBbEIsRUFBaUMsTUFBSyxFQUF0QztBQUNFO0FBQUE7QUFBQSxnQkFBUSxPQUFNLEdBQWQ7QUFBQTtBQUFBLGFBREY7QUFFRTtBQUFBO0FBQUEsZ0JBQVEsT0FBTSxHQUFkO0FBQUE7QUFBQSxhQUZGO0FBR0U7QUFBQTtBQUFBLGdCQUFRLE9BQU0sR0FBZDtBQUFBO0FBQUEsYUFIRjtBQUlFO0FBQUE7QUFBQSxnQkFBUSxPQUFNLEdBQWQ7QUFBQTtBQUFBO0FBSkY7QUFGRjtBQWpCRixPQURGO0FBNkJEOzs7O0VBN0NtQyxnQkFBTVEsUzs7a0JBQXZCWixRIiwiZmlsZSI6IjM2MC5qcyIsInNvdXJjZXNDb250ZW50IjpbInJlcXVpcmUoJ25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzcycpO1xuLy9yZXF1aXJlKCdzdHlsZXMvYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5jc3MnKTtcbi8vcmVxdWlyZSgnLi4vLi4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcycpO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW50cmFkYXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHt2YWx1ZTogJzEnfTtcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgLy90aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcbiAgICBjb25zb2xlLmxvZygnSG9sYSBtdW5kbyEnICsgdGhpcy5zdGF0ZS52YWx1ZSk7XG4gICAgbGV0IHZhbG9yID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMuc2V0U3RhdGUoe3ZhbHVlOiBldmVudC50YXJnZXQudmFsdWV9KTtcbiAgICBjb25zb2xlLmxvZygnSG9sYSBtdW5kbyEnICsgdmFsb3IpO1xuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgyPkRhdG9zIGRlIGVudHJhZGEgcGFyYSB0JnVhY3V0ZTsgYWZkPC9oMj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgPGxhYmVsIGZvcj1cIlwiPk4mdWFjdXRlO21lcm8gZGUgZXN0YWRvcyAoUSk6PC9sYWJlbD5cbiAgICAgICAgICA8c2VsZWN0IHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJcIj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCI+cTA8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyXCI+cTE8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIzXCI+cTI8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI0XCI+cTM8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI1XCI+cTQ8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI2XCI+cTU8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI3XCI+cTY8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI4XCI+cTc8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI5XCI+cTg8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxMFwiPnE5PC9vcHRpb24+XG4gICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8bGFiZWwgZm9yPVwiXCI+RWxlbWVudG9zIGRlbCBhbGZhYmV0byAoJlNpZ21hOyk6PC9sYWJlbD5cbiAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJcIj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCI+YTwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjJcIj5iPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiM1wiPmM8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI0XCI+ZDwvb3B0aW9uPlxuICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0VudHJhZGFzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

})