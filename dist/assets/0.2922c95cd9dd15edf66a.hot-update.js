webpackHotUpdate(0,{

/***/ 355:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(78), RootInstanceProvider = __webpack_require__(86), ReactMount = __webpack_require__(88), React = __webpack_require__(156); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(156);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Entradas = function (_React$Component) {\n  _inherits(Entradas, _React$Component);\n\n  function Entradas() {\n    _classCallCheck(this, Entradas);\n\n    return _possibleConstructorReturn(this, (Entradas.__proto__ || Object.getPrototypeOf(Entradas)).apply(this, arguments));\n  }\n\n  _createClass(Entradas, [{\n    key: \"render\",\n    value: function render() {\n      return _react2.default.createElement(\n        \"div\",\n        { className: \"\" },\n        _react2.default.createElement(\n          \"h1\",\n          null,\n          \"Datos de entrada para el afd\"\n        ),\n        _react2.default.createElement(\n          \"form\",\n          { className: \"\", action: \"index.html\", method: \"post\" },\n          _react2.default.createElement(\n            \"div\",\n            { className: \"form-group\" },\n            _react2.default.createElement(\n              \"label\",\n              { \"for\": \"\" },\n              \"N\\xFAmero de estados (Q):\"\n            ),\n            _react2.default.createElement(\n              \"select\",\n              { \"class\": \"\", name: \"\" },\n              _react2.default.createElement(\n                \"option\",\n                { value: \"\" },\n                \"Seleccione\"\n              ),\n              _react2.default.createElement(\n                \"option\",\n                { value: \"1\" },\n                \"q0\"\n              ),\n              _react2.default.createElement(\n                \"option\",\n                { value: \"2\" },\n                \"q1\"\n              ),\n              _react2.default.createElement(\n                \"option\",\n                { value: \"3\" },\n                \"q2\"\n              ),\n              _react2.default.createElement(\n                \"option\",\n                { value: \"4\" },\n                \"q3\"\n              ),\n              _react2.default.createElement(\n                \"option\",\n                { value: \"5\" },\n                \"q4\"\n              ),\n              _react2.default.createElement(\n                \"option\",\n                { value: \"6\" },\n                \"q5\"\n              ),\n              _react2.default.createElement(\n                \"option\",\n                { value: \"7\" },\n                \"q6\"\n              ),\n              _react2.default.createElement(\n                \"option\",\n                { value: \"8\" },\n                \"q7\"\n              ),\n              _react2.default.createElement(\n                \"option\",\n                { value: \"9\" },\n                \"q8\"\n              ),\n              _react2.default.createElement(\n                \"option\",\n                { value: \"10\" },\n                \"q9\"\n              )\n            ),\n            _react2.default.createElement(\n              \"p\",\n              { \"class\": \"help-block\" },\n              \"Help text here.\"\n            )\n          ),\n          _react2.default.createElement(\n            \"div\",\n            { className: \"form-group\" },\n            _react2.default.createElement(\n              \"label\",\n              { \"for\": \"\" },\n              \"N\\xFAmero de elementos del alfabeto (Sigma):\"\n            ),\n            _react2.default.createElement(\n              \"select\",\n              { \"class\": \"\", name: \"\" },\n              _react2.default.createElement(\n                \"option\",\n                { value: \"\" },\n                \"Seleccione\"\n              ),\n              _react2.default.createElement(\n                \"option\",\n                { value: \"1\" },\n                \"a\"\n              ),\n              _react2.default.createElement(\n                \"option\",\n                { value: \"2\" },\n                \"b\"\n              ),\n              _react2.default.createElement(\n                \"option\",\n                { value: \"3\" },\n                \"c\"\n              ),\n              _react2.default.createElement(\n                \"option\",\n                { value: \"4\" },\n                \"d\"\n              )\n            ),\n            _react2.default.createElement(\n              \"p\",\n              { \"class\": \"help-block\" },\n              \"Help text here.\"\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return Entradas;\n}(_react2.default.Component);\n\nexports.default = Entradas;\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(351); if (makeExportsHot(module, __webpack_require__(156))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot not apply hot update to \" + \"Entradas.js\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9FbnRyYWRhcy5qcz9iMjc0Il0sIm5hbWVzIjpbIkVudHJhZGFzIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztJQUVxQkEsUTs7Ozs7Ozs7Ozs7NkJBQ1g7QUFDTixhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsRUFBZjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERjtBQUVJO0FBQUE7QUFBQSxZQUFNLFdBQVUsRUFBaEIsRUFBbUIsUUFBTyxZQUExQixFQUF1QyxRQUFPLE1BQTlDO0FBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSxZQUFmO0FBQ0U7QUFBQTtBQUFBLGdCQUFPLE9BQUksRUFBWDtBQUFBO0FBQUEsYUFERjtBQUVJO0FBQUE7QUFBQSxnQkFBUSxTQUFNLEVBQWQsRUFBaUIsTUFBSyxFQUF0QjtBQUNFO0FBQUE7QUFBQSxrQkFBUSxPQUFNLEVBQWQ7QUFBQTtBQUFBLGVBREY7QUFFRTtBQUFBO0FBQUEsa0JBQVEsT0FBTSxHQUFkO0FBQUE7QUFBQSxlQUZGO0FBR0U7QUFBQTtBQUFBLGtCQUFRLE9BQU0sR0FBZDtBQUFBO0FBQUEsZUFIRjtBQUlFO0FBQUE7QUFBQSxrQkFBUSxPQUFNLEdBQWQ7QUFBQTtBQUFBLGVBSkY7QUFLRTtBQUFBO0FBQUEsa0JBQVEsT0FBTSxHQUFkO0FBQUE7QUFBQSxlQUxGO0FBTUU7QUFBQTtBQUFBLGtCQUFRLE9BQU0sR0FBZDtBQUFBO0FBQUEsZUFORjtBQU9FO0FBQUE7QUFBQSxrQkFBUSxPQUFNLEdBQWQ7QUFBQTtBQUFBLGVBUEY7QUFRRTtBQUFBO0FBQUEsa0JBQVEsT0FBTSxHQUFkO0FBQUE7QUFBQSxlQVJGO0FBU0U7QUFBQTtBQUFBLGtCQUFRLE9BQU0sR0FBZDtBQUFBO0FBQUEsZUFURjtBQVVFO0FBQUE7QUFBQSxrQkFBUSxPQUFNLEdBQWQ7QUFBQTtBQUFBLGVBVkY7QUFXRTtBQUFBO0FBQUEsa0JBQVEsT0FBTSxJQUFkO0FBQUE7QUFBQTtBQVhGLGFBRko7QUFlRTtBQUFBO0FBQUEsZ0JBQUcsU0FBTSxZQUFUO0FBQUE7QUFBQTtBQWZGLFdBREY7QUFrQkU7QUFBQTtBQUFBLGNBQUssV0FBVSxZQUFmO0FBQ0U7QUFBQTtBQUFBLGdCQUFPLE9BQUksRUFBWDtBQUFBO0FBQUEsYUFERjtBQUVJO0FBQUE7QUFBQSxnQkFBUSxTQUFNLEVBQWQsRUFBaUIsTUFBSyxFQUF0QjtBQUNFO0FBQUE7QUFBQSxrQkFBUSxPQUFNLEVBQWQ7QUFBQTtBQUFBLGVBREY7QUFFRTtBQUFBO0FBQUEsa0JBQVEsT0FBTSxHQUFkO0FBQUE7QUFBQSxlQUZGO0FBR0U7QUFBQTtBQUFBLGtCQUFRLE9BQU0sR0FBZDtBQUFBO0FBQUEsZUFIRjtBQUlFO0FBQUE7QUFBQSxrQkFBUSxPQUFNLEdBQWQ7QUFBQTtBQUFBLGVBSkY7QUFLRTtBQUFBO0FBQUEsa0JBQVEsT0FBTSxHQUFkO0FBQUE7QUFBQTtBQUxGLGFBRko7QUFTRTtBQUFBO0FBQUEsZ0JBQUcsU0FBTSxZQUFUO0FBQUE7QUFBQTtBQVRGO0FBbEJGO0FBRkosT0FERjtBQW1DRDs7OztFQXJDbUMsZ0JBQU1DLFM7O2tCQUF2QkQsUSIsImZpbGUiOiIzNTUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbnRyYWRhcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgPGgxPkRhdG9zIGRlIGVudHJhZGEgcGFyYSBlbCBhZmQ8L2gxPlxuICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cIlwiIGFjdGlvbj1cImluZGV4Lmh0bWxcIiBtZXRob2Q9XCJwb3N0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIlwiPk4mdWFjdXRlO21lcm8gZGUgZXN0YWRvcyAoUSk6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwiXCIgbmFtZT1cIlwiPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPlNlbGVjY2lvbmU8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCI+cTA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyXCI+cTE8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIzXCI+cTI8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI0XCI+cTM8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI1XCI+cTQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI2XCI+cTU8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI3XCI+cTY8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI4XCI+cTc8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI5XCI+cTg8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxMFwiPnE5PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgIDxwIGNsYXNzPVwiaGVscC1ibG9ja1wiPkhlbHAgdGV4dCBoZXJlLjwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJcIj5OJnVhY3V0ZTttZXJvIGRlIGVsZW1lbnRvcyBkZWwgYWxmYWJldG8gKFNpZ21hKTo8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJcIiBuYW1lPVwiXCI+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+U2VsZWNjaW9uZTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjFcIj5hPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMlwiPmI8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIzXCI+Yzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjRcIj5kPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgIDxwIGNsYXNzPVwiaGVscC1ibG9ja1wiPkhlbHAgdGV4dCBoZXJlLjwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0VudHJhZGFzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

})