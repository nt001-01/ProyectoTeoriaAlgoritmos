webpackHotUpdate(0,{

/***/ 360:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(78), RootInstanceProvider = __webpack_require__(86), ReactMount = __webpack_require__(88), React = __webpack_require__(156); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(156);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n__webpack_require__(351);\n//require('styles/bootstrap/dist/css/bootstrap.css');\n//require('../../node_modules/bootstrap/dist/css/bootstrap.min.css');\n\nvar Entradas = function (_React$Component) {\n  _inherits(Entradas, _React$Component);\n\n  function Entradas(props) {\n    _classCallCheck(this, Entradas);\n\n    var _this = _possibleConstructorReturn(this, (Entradas.__proto__ || Object.getPrototypeOf(Entradas)).call(this, props));\n\n    _this.state = { estados: '1' };\n    _this.state = { alfabeto: '1' };\n    _this.handleChange = _this.handleChange.bind(_this);\n    return _this;\n  }\n\n  _createClass(Entradas, [{\n    key: 'handleChange',\n    value: function handleChange(event) {\n      console.log('primer valor!' + this.state.estados);\n      var valor = event.target.value;\n      this.setState({ valueee: event.target.value });\n      console.log('Hola mundo!' + valor);\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          'h2',\n          null,\n          'Datos de entrada para t\\xFA afd'\n        ),\n        _react2.default.createElement(\n          'div',\n          { className: 'form-group' },\n          _react2.default.createElement(\n            'label',\n            { 'for': '' },\n            'N\\xFAmero de estados (Q):'\n          ),\n          _react2.default.createElement(\n            'select',\n            { value: this.state.value, onChange: this.handleChange, className: 'form-control', name: '' },\n            _react2.default.createElement(\n              'option',\n              { value: '1' },\n              'q0'\n            ),\n            _react2.default.createElement(\n              'option',\n              { value: '2' },\n              'q1'\n            ),\n            _react2.default.createElement(\n              'option',\n              { value: '3' },\n              'q2'\n            ),\n            _react2.default.createElement(\n              'option',\n              { value: '4' },\n              'q3'\n            ),\n            _react2.default.createElement(\n              'option',\n              { value: '5' },\n              'q4'\n            ),\n            _react2.default.createElement(\n              'option',\n              { value: '6' },\n              'q5'\n            ),\n            _react2.default.createElement(\n              'option',\n              { value: '7' },\n              'q6'\n            ),\n            _react2.default.createElement(\n              'option',\n              { value: '8' },\n              'q7'\n            ),\n            _react2.default.createElement(\n              'option',\n              { value: '9' },\n              'q8'\n            ),\n            _react2.default.createElement(\n              'option',\n              { value: '10' },\n              'q9'\n            )\n          )\n        ),\n        _react2.default.createElement(\n          'div',\n          { className: 'form-group' },\n          _react2.default.createElement(\n            'label',\n            { 'for': '' },\n            'Elementos del alfabeto (\\u03A3):'\n          ),\n          _react2.default.createElement(\n            'select',\n            { className: 'form-control', name: '' },\n            _react2.default.createElement(\n              'option',\n              { value: '1' },\n              'a'\n            ),\n            _react2.default.createElement(\n              'option',\n              { value: '2' },\n              'b'\n            ),\n            _react2.default.createElement(\n              'option',\n              { value: '3' },\n              'c'\n            ),\n            _react2.default.createElement(\n              'option',\n              { value: '4' },\n              'd'\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return Entradas;\n}(_react2.default.Component);\n\nexports.default = Entradas;\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(355); if (makeExportsHot(module, __webpack_require__(156))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot not apply hot update to \" + \"Entradas.js\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9FbnRyYWRhcy5qcz9iMjc0Il0sIm5hbWVzIjpbInJlcXVpcmUiLCJFbnRyYWRhcyIsInByb3BzIiwic3RhdGUiLCJlc3RhZG9zIiwiYWxmYWJldG8iLCJoYW5kbGVDaGFuZ2UiLCJiaW5kIiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwidmFsb3IiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNldFN0YXRlIiwidmFsdWVlZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUdBOzs7Ozs7Ozs7Ozs7QUFIQSxtQkFBQUEsQ0FBUSxHQUFSO0FBQ0E7QUFDQTs7SUFHcUJDLFE7OztBQUNuQixvQkFBWUMsS0FBWixFQUFrQjtBQUFBOztBQUFBLG9IQUNWQSxLQURVOztBQUVoQixVQUFLQyxLQUFMLEdBQWEsRUFBQ0MsU0FBUyxHQUFWLEVBQWI7QUFDQSxVQUFLRCxLQUFMLEdBQWEsRUFBQ0UsVUFBVSxHQUFYLEVBQWI7QUFDQSxVQUFLQyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JDLElBQWxCLE9BQXBCO0FBSmdCO0FBS2pCOzs7O2lDQUVZQyxLLEVBQU87QUFDbEJDLGNBQVFDLEdBQVIsQ0FBWSxrQkFBa0IsS0FBS1AsS0FBTCxDQUFXQyxPQUF6QztBQUNBLFVBQUlPLFFBQVFILE1BQU1JLE1BQU4sQ0FBYUMsS0FBekI7QUFDQSxXQUFLQyxRQUFMLENBQWMsRUFBQ0MsU0FBU1AsTUFBTUksTUFBTixDQUFhQyxLQUF2QixFQUFkO0FBQ0FKLGNBQVFDLEdBQVIsQ0FBWSxnQkFBZ0JDLEtBQTVCO0FBQ0Q7Ozs2QkFFTztBQUNOLGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURGO0FBRUU7QUFBQTtBQUFBLFlBQUssV0FBVSxZQUFmO0FBQ0U7QUFBQTtBQUFBLGNBQU8sT0FBSSxFQUFYO0FBQUE7QUFBQSxXQURGO0FBRUU7QUFBQTtBQUFBLGNBQVEsT0FBTyxLQUFLUixLQUFMLENBQVdVLEtBQTFCLEVBQWlDLFVBQVUsS0FBS1AsWUFBaEQsRUFBOEQsV0FBVSxjQUF4RSxFQUF1RixNQUFLLEVBQTVGO0FBQ0U7QUFBQTtBQUFBLGdCQUFRLE9BQU0sR0FBZDtBQUFBO0FBQUEsYUFERjtBQUVFO0FBQUE7QUFBQSxnQkFBUSxPQUFNLEdBQWQ7QUFBQTtBQUFBLGFBRkY7QUFHRTtBQUFBO0FBQUEsZ0JBQVEsT0FBTSxHQUFkO0FBQUE7QUFBQSxhQUhGO0FBSUU7QUFBQTtBQUFBLGdCQUFRLE9BQU0sR0FBZDtBQUFBO0FBQUEsYUFKRjtBQUtFO0FBQUE7QUFBQSxnQkFBUSxPQUFNLEdBQWQ7QUFBQTtBQUFBLGFBTEY7QUFNRTtBQUFBO0FBQUEsZ0JBQVEsT0FBTSxHQUFkO0FBQUE7QUFBQSxhQU5GO0FBT0U7QUFBQTtBQUFBLGdCQUFRLE9BQU0sR0FBZDtBQUFBO0FBQUEsYUFQRjtBQVFFO0FBQUE7QUFBQSxnQkFBUSxPQUFNLEdBQWQ7QUFBQTtBQUFBLGFBUkY7QUFTRTtBQUFBO0FBQUEsZ0JBQVEsT0FBTSxHQUFkO0FBQUE7QUFBQSxhQVRGO0FBVUU7QUFBQTtBQUFBLGdCQUFRLE9BQU0sSUFBZDtBQUFBO0FBQUE7QUFWRjtBQUZGLFNBRkY7QUFpQkU7QUFBQTtBQUFBLFlBQUssV0FBVSxZQUFmO0FBQ0U7QUFBQTtBQUFBLGNBQU8sT0FBSSxFQUFYO0FBQUE7QUFBQSxXQURGO0FBRUU7QUFBQTtBQUFBLGNBQVEsV0FBVSxjQUFsQixFQUFpQyxNQUFLLEVBQXRDO0FBQ0U7QUFBQTtBQUFBLGdCQUFRLE9BQU0sR0FBZDtBQUFBO0FBQUEsYUFERjtBQUVFO0FBQUE7QUFBQSxnQkFBUSxPQUFNLEdBQWQ7QUFBQTtBQUFBLGFBRkY7QUFHRTtBQUFBO0FBQUEsZ0JBQVEsT0FBTSxHQUFkO0FBQUE7QUFBQSxhQUhGO0FBSUU7QUFBQTtBQUFBLGdCQUFRLE9BQU0sR0FBZDtBQUFBO0FBQUE7QUFKRjtBQUZGO0FBakJGLE9BREY7QUE2QkQ7Ozs7RUE3Q21DLGdCQUFNVSxTOztrQkFBdkJmLFEiLCJmaWxlIjoiMzYwLmpzIiwic291cmNlc0NvbnRlbnQiOlsicmVxdWlyZSgnbm9ybWFsaXplLmNzcy9ub3JtYWxpemUuY3NzJyk7XG4vL3JlcXVpcmUoJ3N0eWxlcy9ib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLmNzcycpO1xuLy9yZXF1aXJlKCcuLi8uLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJyk7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbnRyYWRhcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge2VzdGFkb3M6ICcxJ307XG4gICAgdGhpcy5zdGF0ZSA9IHthbGZhYmV0bzogJzEnfTtcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcbiAgICBjb25zb2xlLmxvZygncHJpbWVyIHZhbG9yIScgKyB0aGlzLnN0YXRlLmVzdGFkb3MpO1xuICAgIGxldCB2YWxvciA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLnNldFN0YXRlKHt2YWx1ZWVlOiBldmVudC50YXJnZXQudmFsdWV9KTtcbiAgICBjb25zb2xlLmxvZygnSG9sYSBtdW5kbyEnICsgdmFsb3IpO1xuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgyPkRhdG9zIGRlIGVudHJhZGEgcGFyYSB0JnVhY3V0ZTsgYWZkPC9oMj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgPGxhYmVsIGZvcj1cIlwiPk4mdWFjdXRlO21lcm8gZGUgZXN0YWRvcyAoUSk6PC9sYWJlbD5cbiAgICAgICAgICA8c2VsZWN0IHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJcIj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCI+cTA8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyXCI+cTE8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIzXCI+cTI8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI0XCI+cTM8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI1XCI+cTQ8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI2XCI+cTU8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI3XCI+cTY8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI4XCI+cTc8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI5XCI+cTg8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxMFwiPnE5PC9vcHRpb24+XG4gICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8bGFiZWwgZm9yPVwiXCI+RWxlbWVudG9zIGRlbCBhbGZhYmV0byAoJlNpZ21hOyk6PC9sYWJlbD5cbiAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJcIj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCI+YTwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjJcIj5iPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiM1wiPmM8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI0XCI+ZDwvb3B0aW9uPlxuICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0VudHJhZGFzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

})