webpackHotUpdate(0,{

/***/ 360:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(78), RootInstanceProvider = __webpack_require__(86), ReactMount = __webpack_require__(88), React = __webpack_require__(156); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(156);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n__webpack_require__(351);\n//require('styles/bootstrap/dist/css/bootstrap.css');\n//require('../../node_modules/bootstrap/dist/css/bootstrap.min.css');\n\nvar Entradas = function (_React$Component) {\n  _inherits(Entradas, _React$Component);\n\n  function Entradas(props) {\n    _classCallCheck(this, Entradas);\n\n    var _this = _possibleConstructorReturn(this, (Entradas.__proto__ || Object.getPrototypeOf(Entradas)).call(this, props));\n\n    _this.state = { value: 'B' };\n    _this.handleChange = _this.handleChange.bind(_this);\n    _this.handleSubmit = _this.handleSubmit.bind(_this);\n    return _this;\n  }\n\n  _createClass(Entradas, [{\n    key: 'handleChange',\n    value: function handleChange(event) {\n      this.setState({ value: event.target.value });\n      console.log(\"Hola mundo\");\n    }\n  }, {\n    key: 'handleSubmit',\n    value: function handleSubmit(event) {\n      alert('Select value is: ' + this.state.value);\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        { className: '' },\n        _react2.default.createElement(\n          'h1',\n          null,\n          'Datos de entrada para t\\xFA afd'\n        ),\n        _react2.default.createElement(\n          'form',\n          { className: '', action: 'index.html', method: 'post' },\n          _react2.default.createElement(\n            'div',\n            { className: 'form-group' },\n            _react2.default.createElement(\n              'label',\n              { 'for': '' },\n              'N\\xFAmero de estados (Q):'\n            ),\n            _react2.default.createElement(\n              'select',\n              { value: this.state.value, onChange: this.handleChange, className: '', name: '' },\n              _react2.default.createElement(\n                'option',\n                { value: '' },\n                'Seleccione'\n              ),\n              _react2.default.createElement(\n                'option',\n                { value: '1' },\n                'q0'\n              ),\n              _react2.default.createElement(\n                'option',\n                { value: '2' },\n                'q1'\n              ),\n              _react2.default.createElement(\n                'option',\n                { value: '3' },\n                'q2'\n              ),\n              _react2.default.createElement(\n                'option',\n                { value: '4' },\n                'q3'\n              ),\n              _react2.default.createElement(\n                'option',\n                { value: '5' },\n                'q4'\n              ),\n              _react2.default.createElement(\n                'option',\n                { value: '6' },\n                'q5'\n              ),\n              _react2.default.createElement(\n                'option',\n                { value: '7' },\n                'q6'\n              ),\n              _react2.default.createElement(\n                'option',\n                { value: '8' },\n                'q7'\n              ),\n              _react2.default.createElement(\n                'option',\n                { value: '9' },\n                'q8'\n              ),\n              _react2.default.createElement(\n                'option',\n                { value: '10' },\n                'q9'\n              )\n            ),\n            _react2.default.createElement(\n              'p',\n              { 'class': 'help-block' },\n              'Help text here.'\n            )\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'form-group' },\n            _react2.default.createElement(\n              'label',\n              { 'for': '' },\n              'Elementos del alfabeto (Sigma):'\n            ),\n            _react2.default.createElement(\n              'select',\n              { 'class': '', name: '' },\n              _react2.default.createElement(\n                'option',\n                { value: '' },\n                'Seleccione'\n              ),\n              _react2.default.createElement(\n                'option',\n                { value: '1' },\n                'a'\n              ),\n              _react2.default.createElement(\n                'option',\n                { value: '2' },\n                'b'\n              ),\n              _react2.default.createElement(\n                'option',\n                { value: '3' },\n                'c'\n              ),\n              _react2.default.createElement(\n                'option',\n                { value: '4' },\n                'd'\n              )\n            ),\n            _react2.default.createElement(\n              'p',\n              { 'class': 'help-block' },\n              'Help text here.'\n            )\n          )\n        ),\n        _react2.default.createElement(\n          'div',\n          null,\n          _react2.default.createElement(\n            'select',\n            { value: this.state.value, onChange: this.handleChange },\n            _react2.default.createElement(\n              'option',\n              { value: 'A' },\n              'Apple'\n            ),\n            _react2.default.createElement(\n              'option',\n              { value: 'B' },\n              'Banana'\n            ),\n            _react2.default.createElement(\n              'option',\n              { value: 'C' },\n              'Cranberry'\n            )\n          ),\n          _react2.default.createElement(\n            'button',\n            { onClick: this.handleSubmit },\n            'Submit'\n          )\n        )\n      );\n    }\n  }]);\n\n  return Entradas;\n}(_react2.default.Component);\n\nexports.default = Entradas;\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(355); if (makeExportsHot(module, __webpack_require__(156))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot not apply hot update to \" + \"Entradas.js\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9FbnRyYWRhcy5qcz9iMjc0Il0sIm5hbWVzIjpbInJlcXVpcmUiLCJFbnRyYWRhcyIsInByb3BzIiwic3RhdGUiLCJ2YWx1ZSIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInNldFN0YXRlIiwidGFyZ2V0IiwiY29uc29sZSIsImxvZyIsImFsZXJ0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBR0E7Ozs7Ozs7Ozs7OztBQUhBLG1CQUFBQSxDQUFRLEdBQVI7QUFDQTtBQUNBOztJQUdxQkMsUTs7O0FBQ25CLG9CQUFZQyxLQUFaLEVBQWtCO0FBQUE7O0FBQUEsb0hBQ1ZBLEtBRFU7O0FBRWhCLFVBQUtDLEtBQUwsR0FBYSxFQUFDQyxPQUFPLEdBQVIsRUFBYjtBQUNBLFVBQUtDLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkMsSUFBbEIsT0FBcEI7QUFDQSxVQUFLQyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JELElBQWxCLE9BQXBCO0FBSmdCO0FBS2pCOzs7O2lDQUVZRSxLLEVBQU87QUFDbEIsV0FBS0MsUUFBTCxDQUFjLEVBQUNMLE9BQU9JLE1BQU1FLE1BQU4sQ0FBYU4sS0FBckIsRUFBZDtBQUNBTyxjQUFRQyxHQUFSLENBQVksWUFBWjtBQUNEOzs7aUNBRVlKLEssRUFBTztBQUNsQkssWUFBTSxzQkFBc0IsS0FBS1YsS0FBTCxDQUFXQyxLQUF2QztBQUNEOzs7NkJBRU87QUFDTixhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsRUFBZjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERjtBQUVJO0FBQUE7QUFBQSxZQUFNLFdBQVUsRUFBaEIsRUFBbUIsUUFBTyxZQUExQixFQUF1QyxRQUFPLE1BQTlDO0FBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSxZQUFmO0FBQ0U7QUFBQTtBQUFBLGdCQUFPLE9BQUksRUFBWDtBQUFBO0FBQUEsYUFERjtBQUVJO0FBQUE7QUFBQSxnQkFBUSxPQUFPLEtBQUtELEtBQUwsQ0FBV0MsS0FBMUIsRUFBaUMsVUFBVSxLQUFLQyxZQUFoRCxFQUE4RCxXQUFVLEVBQXhFLEVBQTJFLE1BQUssRUFBaEY7QUFDRTtBQUFBO0FBQUEsa0JBQVEsT0FBTSxFQUFkO0FBQUE7QUFBQSxlQURGO0FBRUU7QUFBQTtBQUFBLGtCQUFRLE9BQU0sR0FBZDtBQUFBO0FBQUEsZUFGRjtBQUdFO0FBQUE7QUFBQSxrQkFBUSxPQUFNLEdBQWQ7QUFBQTtBQUFBLGVBSEY7QUFJRTtBQUFBO0FBQUEsa0JBQVEsT0FBTSxHQUFkO0FBQUE7QUFBQSxlQUpGO0FBS0U7QUFBQTtBQUFBLGtCQUFRLE9BQU0sR0FBZDtBQUFBO0FBQUEsZUFMRjtBQU1FO0FBQUE7QUFBQSxrQkFBUSxPQUFNLEdBQWQ7QUFBQTtBQUFBLGVBTkY7QUFPRTtBQUFBO0FBQUEsa0JBQVEsT0FBTSxHQUFkO0FBQUE7QUFBQSxlQVBGO0FBUUU7QUFBQTtBQUFBLGtCQUFRLE9BQU0sR0FBZDtBQUFBO0FBQUEsZUFSRjtBQVNFO0FBQUE7QUFBQSxrQkFBUSxPQUFNLEdBQWQ7QUFBQTtBQUFBLGVBVEY7QUFVRTtBQUFBO0FBQUEsa0JBQVEsT0FBTSxHQUFkO0FBQUE7QUFBQSxlQVZGO0FBV0U7QUFBQTtBQUFBLGtCQUFRLE9BQU0sSUFBZDtBQUFBO0FBQUE7QUFYRixhQUZKO0FBZUU7QUFBQTtBQUFBLGdCQUFHLFNBQU0sWUFBVDtBQUFBO0FBQUE7QUFmRixXQURGO0FBa0JFO0FBQUE7QUFBQSxjQUFLLFdBQVUsWUFBZjtBQUNFO0FBQUE7QUFBQSxnQkFBTyxPQUFJLEVBQVg7QUFBQTtBQUFBLGFBREY7QUFFSTtBQUFBO0FBQUEsZ0JBQVEsU0FBTSxFQUFkLEVBQWlCLE1BQUssRUFBdEI7QUFDRTtBQUFBO0FBQUEsa0JBQVEsT0FBTSxFQUFkO0FBQUE7QUFBQSxlQURGO0FBRUU7QUFBQTtBQUFBLGtCQUFRLE9BQU0sR0FBZDtBQUFBO0FBQUEsZUFGRjtBQUdFO0FBQUE7QUFBQSxrQkFBUSxPQUFNLEdBQWQ7QUFBQTtBQUFBLGVBSEY7QUFJRTtBQUFBO0FBQUEsa0JBQVEsT0FBTSxHQUFkO0FBQUE7QUFBQSxlQUpGO0FBS0U7QUFBQTtBQUFBLGtCQUFRLE9BQU0sR0FBZDtBQUFBO0FBQUE7QUFMRixhQUZKO0FBU0U7QUFBQTtBQUFBLGdCQUFHLFNBQU0sWUFBVDtBQUFBO0FBQUE7QUFURjtBQWxCRixTQUZKO0FBZ0NJO0FBQUE7QUFBQTtBQUNGO0FBQUE7QUFBQSxjQUFRLE9BQU8sS0FBS0YsS0FBTCxDQUFXQyxLQUExQixFQUFpQyxVQUFVLEtBQUtDLFlBQWhEO0FBQ0U7QUFBQTtBQUFBLGdCQUFRLE9BQU0sR0FBZDtBQUFBO0FBQUEsYUFERjtBQUVFO0FBQUE7QUFBQSxnQkFBUSxPQUFNLEdBQWQ7QUFBQTtBQUFBLGFBRkY7QUFHRTtBQUFBO0FBQUEsZ0JBQVEsT0FBTSxHQUFkO0FBQUE7QUFBQTtBQUhGLFdBREU7QUFNRjtBQUFBO0FBQUEsY0FBUSxTQUFTLEtBQUtFLFlBQXRCO0FBQUE7QUFBQTtBQU5FO0FBaENKLE9BREY7QUEyQ0Q7Ozs7RUE3RG1DLGdCQUFNTyxTOztrQkFBdkJiLFEiLCJmaWxlIjoiMzYwLmpzIiwic291cmNlc0NvbnRlbnQiOlsicmVxdWlyZSgnbm9ybWFsaXplLmNzcy9ub3JtYWxpemUuY3NzJyk7XG4vL3JlcXVpcmUoJ3N0eWxlcy9ib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLmNzcycpO1xuLy9yZXF1aXJlKCcuLi8uLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJyk7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbnRyYWRhcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge3ZhbHVlOiAnQid9O1xuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHt2YWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlfSk7XG4gICAgY29uc29sZS5sb2coXCJIb2xhIG11bmRvXCIpO1xuICB9XG5cbiAgaGFuZGxlU3VibWl0KGV2ZW50KSB7XG4gICAgYWxlcnQoJ1NlbGVjdCB2YWx1ZSBpczogJyArIHRoaXMuc3RhdGUudmFsdWUpO1xuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgPGgxPkRhdG9zIGRlIGVudHJhZGEgcGFyYSB0JnVhY3V0ZTsgYWZkPC9oMT5cbiAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJcIiBhY3Rpb249XCJpbmRleC5odG1sXCIgbWV0aG9kPVwicG9zdFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJcIj5OJnVhY3V0ZTttZXJvIGRlIGVzdGFkb3MgKFEpOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPHNlbGVjdCB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSBjbGFzc05hbWU9XCJcIiBuYW1lPVwiXCI+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+U2VsZWNjaW9uZTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjFcIj5xMDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjJcIj5xMTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjNcIj5xMjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjRcIj5xMzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjVcIj5xNDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjZcIj5xNTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjdcIj5xNjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjhcIj5xNzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjlcIj5xODwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjEwXCI+cTk8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJoZWxwLWJsb2NrXCI+SGVscCB0ZXh0IGhlcmUuPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIlwiPkVsZW1lbnRvcyBkZWwgYWxmYWJldG8gKFNpZ21hKTo8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJcIiBuYW1lPVwiXCI+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+U2VsZWNjaW9uZTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjFcIj5hPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMlwiPmI8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIzXCI+Yzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjRcIj5kPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgIDxwIGNsYXNzPVwiaGVscC1ibG9ja1wiPkhlbHAgdGV4dCBoZXJlLjwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICA8c2VsZWN0IHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9PlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJBXCI+QXBwbGU8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQlwiPkJhbmFuYTwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJDXCI+Q3JhbmJlcnJ5PC9vcHRpb24+XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU3VibWl0fT5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvRW50cmFkYXMuanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ }

})