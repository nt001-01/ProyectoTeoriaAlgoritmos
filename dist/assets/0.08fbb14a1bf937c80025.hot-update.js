webpackHotUpdate(0,{

/***/ 360:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(78), RootInstanceProvider = __webpack_require__(86), ReactMount = __webpack_require__(88), React = __webpack_require__(156); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(156);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n__webpack_require__(351);\n//require('styles/bootstrap/dist/css/bootstrap.css');\n//require('../../node_modules/bootstrap/dist/css/bootstrap.min.css');\n\nvar Entradas = function (_React$Component) {\n  _inherits(Entradas, _React$Component);\n\n  function Entradas(props) {\n    _classCallCheck(this, Entradas);\n\n    var _this = _possibleConstructorReturn(this, (Entradas.__proto__ || Object.getPrototypeOf(Entradas)).call(this, props));\n\n    _this.cambiandoEstado = function (event) {\n      console.log('primer valor!' + _this.state.estados);\n      var valor = event.target.value;\n      _this.setState({ estados: event.target.value });\n      console.log('Segundo valor!' + valor);\n      var pagina = _this.state.datos;\n      _this.setState({ datos: pagina + 1 });\n    };\n\n    _this.cambiandoAlfabeto = function (event) {\n      console.log('primer valor!' + _this.state.alfabetos);\n      var valora = event.target.value;\n      _this.setState({ alfabetos: event.target.value });\n      console.log('Segundo valor!' + valora);\n      var pagina = _this.state.page;\n      _this.setState({ page: pagina + 1 });\n      console.log('pagina ' + pagina);\n    };\n\n    _this.state = {\n      datos: 0,\n      estados: '1',\n      alfabetos: '1'\n    };\n    _this.handleChange = _this.cambiandoEstado.bind(_this);\n    _this.handleChange = _this.cambiandoAlfabeto.bind(_this);\n    return _this;\n  }\n\n  _createClass(Entradas, [{\n    key: 'render',\n    value: function render() {\n      var vista = void 0;\n      if (this.state.datos === 0) {\n        vista = _react2.default.createElement(\n          'div',\n          null,\n          _react2.default.createElement(\n            'h2',\n            null,\n            'Datos de entrada para t\\xFA afd'\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'form-group' },\n            _react2.default.createElement(\n              'label',\n              { 'for': '' },\n              'N\\xFAmero de estados (Q):'\n            ),\n            _react2.default.createElement(\n              'select',\n              { value: this.state.estados, onChange: this.cambiandoEstado, className: 'form-control', name: '' },\n              _react2.default.createElement(\n                'option',\n                { value: '1' },\n                'q0'\n              ),\n              _react2.default.createElement(\n                'option',\n                { value: '2' },\n                'q1'\n              ),\n              _react2.default.createElement(\n                'option',\n                { value: '3' },\n                'q2'\n              ),\n              _react2.default.createElement(\n                'option',\n                { value: '4' },\n                'q3'\n              ),\n              _react2.default.createElement(\n                'option',\n                { value: '5' },\n                'q4'\n              ),\n              _react2.default.createElement(\n                'option',\n                { value: '6' },\n                'q5'\n              ),\n              _react2.default.createElement(\n                'option',\n                { value: '7' },\n                'q6'\n              ),\n              _react2.default.createElement(\n                'option',\n                { value: '8' },\n                'q7'\n              ),\n              _react2.default.createElement(\n                'option',\n                { value: '9' },\n                'q8'\n              ),\n              _react2.default.createElement(\n                'option',\n                { value: '10' },\n                'q9'\n              )\n            )\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'form-group' },\n            _react2.default.createElement(\n              'label',\n              { 'for': '' },\n              'Elementos del alfabeto (\\u03A3):'\n            ),\n            _react2.default.createElement(\n              'select',\n              { value: this.state.alfabeto, onChange: this.cambiandoAlfabeto, className: 'form-control', name: '' },\n              _react2.default.createElement(\n                'option',\n                { value: '1' },\n                'a'\n              ),\n              _react2.default.createElement(\n                'option',\n                { value: '2' },\n                'b'\n              ),\n              _react2.default.createElement(\n                'option',\n                { value: '3' },\n                'c'\n              ),\n              _react2.default.createElement(\n                'option',\n                { value: '4' },\n                'd'\n              )\n            )\n          )\n        );\n      }\n      return _react2.default.createElement(\n        'div',\n        null,\n        vista\n      );\n    }\n  }]);\n\n  return Entradas;\n}(_react2.default.Component);\n\nexports.default = Entradas;\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(355); if (makeExportsHot(module, __webpack_require__(156))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot not apply hot update to \" + \"Entradas.js\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9FbnRyYWRhcy5qcz9iMjc0Il0sIm5hbWVzIjpbInJlcXVpcmUiLCJFbnRyYWRhcyIsInByb3BzIiwiY2FtYmlhbmRvRXN0YWRvIiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwic3RhdGUiLCJlc3RhZG9zIiwidmFsb3IiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNldFN0YXRlIiwicGFnaW5hIiwiZGF0b3MiLCJjYW1iaWFuZG9BbGZhYmV0byIsImFsZmFiZXRvcyIsInZhbG9yYSIsInBhZ2UiLCJoYW5kbGVDaGFuZ2UiLCJiaW5kIiwidmlzdGEiLCJhbGZhYmV0byIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUdBOzs7Ozs7Ozs7Ozs7QUFIQSxtQkFBQUEsQ0FBUSxHQUFSO0FBQ0E7QUFDQTs7SUFHcUJDLFE7OztBQUNuQixvQkFBWUMsS0FBWixFQUFrQjtBQUFBOztBQUFBLG9IQUNWQSxLQURVOztBQUFBLFVBV2xCQyxlQVhrQixHQVdGLFVBQUNDLEtBQUQsRUFBUztBQUN2QkMsY0FBUUMsR0FBUixDQUFZLGtCQUFrQixNQUFLQyxLQUFMLENBQVdDLE9BQXpDO0FBQ0EsVUFBSUMsUUFBUUwsTUFBTU0sTUFBTixDQUFhQyxLQUF6QjtBQUNBLFlBQUtDLFFBQUwsQ0FBYyxFQUFDSixTQUFTSixNQUFNTSxNQUFOLENBQWFDLEtBQXZCLEVBQWQ7QUFDQU4sY0FBUUMsR0FBUixDQUFZLG1CQUFtQkcsS0FBL0I7QUFDQSxVQUFJSSxTQUFTLE1BQUtOLEtBQUwsQ0FBV08sS0FBeEI7QUFDQSxZQUFLRixRQUFMLENBQWMsRUFBQ0UsT0FBT0QsU0FBTyxDQUFmLEVBQWQ7QUFDRCxLQWxCaUI7O0FBQUEsVUFvQmxCRSxpQkFwQmtCLEdBb0JBLFVBQUNYLEtBQUQsRUFBUztBQUN6QkMsY0FBUUMsR0FBUixDQUFZLGtCQUFrQixNQUFLQyxLQUFMLENBQVdTLFNBQXpDO0FBQ0EsVUFBSUMsU0FBU2IsTUFBTU0sTUFBTixDQUFhQyxLQUExQjtBQUNBLFlBQUtDLFFBQUwsQ0FBYyxFQUFDSSxXQUFXWixNQUFNTSxNQUFOLENBQWFDLEtBQXpCLEVBQWQ7QUFDQU4sY0FBUUMsR0FBUixDQUFZLG1CQUFtQlcsTUFBL0I7QUFDQSxVQUFJSixTQUFTLE1BQUtOLEtBQUwsQ0FBV1csSUFBeEI7QUFDQSxZQUFLTixRQUFMLENBQWMsRUFBQ00sTUFBTUwsU0FBTyxDQUFkLEVBQWQ7QUFDQVIsY0FBUUMsR0FBUixDQUFZLFlBQVlPLE1BQXhCO0FBQ0QsS0E1QmlCOztBQUVoQixVQUFLTixLQUFMLEdBQWE7QUFDWE8sYUFBTyxDQURJO0FBRVhOLGVBQVMsR0FGRTtBQUdYUSxpQkFBVztBQUhBLEtBQWI7QUFLQSxVQUFLRyxZQUFMLEdBQW9CLE1BQUtoQixlQUFMLENBQXFCaUIsSUFBckIsT0FBcEI7QUFDQSxVQUFLRCxZQUFMLEdBQW9CLE1BQUtKLGlCQUFMLENBQXVCSyxJQUF2QixPQUFwQjtBQVJnQjtBQVNqQjs7Ozs2QkFxQk87QUFDTixVQUFJQyxjQUFKO0FBQ0EsVUFBRyxLQUFLZCxLQUFMLENBQVdPLEtBQVgsS0FBcUIsQ0FBeEIsRUFBMEI7QUFDeEJPLGdCQUFTO0FBQUE7QUFBQTtBQUNQO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FETztBQUVQO0FBQUE7QUFBQSxjQUFLLFdBQVUsWUFBZjtBQUNFO0FBQUE7QUFBQSxnQkFBTyxPQUFJLEVBQVg7QUFBQTtBQUFBLGFBREY7QUFFRTtBQUFBO0FBQUEsZ0JBQVEsT0FBTyxLQUFLZCxLQUFMLENBQVdDLE9BQTFCLEVBQW1DLFVBQVUsS0FBS0wsZUFBbEQsRUFBbUUsV0FBVSxjQUE3RSxFQUE0RixNQUFLLEVBQWpHO0FBQ0U7QUFBQTtBQUFBLGtCQUFRLE9BQU0sR0FBZDtBQUFBO0FBQUEsZUFERjtBQUVFO0FBQUE7QUFBQSxrQkFBUSxPQUFNLEdBQWQ7QUFBQTtBQUFBLGVBRkY7QUFHRTtBQUFBO0FBQUEsa0JBQVEsT0FBTSxHQUFkO0FBQUE7QUFBQSxlQUhGO0FBSUU7QUFBQTtBQUFBLGtCQUFRLE9BQU0sR0FBZDtBQUFBO0FBQUEsZUFKRjtBQUtFO0FBQUE7QUFBQSxrQkFBUSxPQUFNLEdBQWQ7QUFBQTtBQUFBLGVBTEY7QUFNRTtBQUFBO0FBQUEsa0JBQVEsT0FBTSxHQUFkO0FBQUE7QUFBQSxlQU5GO0FBT0U7QUFBQTtBQUFBLGtCQUFRLE9BQU0sR0FBZDtBQUFBO0FBQUEsZUFQRjtBQVFFO0FBQUE7QUFBQSxrQkFBUSxPQUFNLEdBQWQ7QUFBQTtBQUFBLGVBUkY7QUFTRTtBQUFBO0FBQUEsa0JBQVEsT0FBTSxHQUFkO0FBQUE7QUFBQSxlQVRGO0FBVUU7QUFBQTtBQUFBLGtCQUFRLE9BQU0sSUFBZDtBQUFBO0FBQUE7QUFWRjtBQUZGLFdBRk87QUFpQlA7QUFBQTtBQUFBLGNBQUssV0FBVSxZQUFmO0FBQ0U7QUFBQTtBQUFBLGdCQUFPLE9BQUksRUFBWDtBQUFBO0FBQUEsYUFERjtBQUVFO0FBQUE7QUFBQSxnQkFBUSxPQUFPLEtBQUtJLEtBQUwsQ0FBV2UsUUFBMUIsRUFBb0MsVUFBVSxLQUFLUCxpQkFBbkQsRUFBc0UsV0FBVSxjQUFoRixFQUErRixNQUFLLEVBQXBHO0FBQ0U7QUFBQTtBQUFBLGtCQUFRLE9BQU0sR0FBZDtBQUFBO0FBQUEsZUFERjtBQUVFO0FBQUE7QUFBQSxrQkFBUSxPQUFNLEdBQWQ7QUFBQTtBQUFBLGVBRkY7QUFHRTtBQUFBO0FBQUEsa0JBQVEsT0FBTSxHQUFkO0FBQUE7QUFBQSxlQUhGO0FBSUU7QUFBQTtBQUFBLGtCQUFRLE9BQU0sR0FBZDtBQUFBO0FBQUE7QUFKRjtBQUZGO0FBakJPLFNBQVQ7QUEyQkQ7QUFDRCxhQUNFO0FBQUE7QUFBQTtBQUNHTTtBQURILE9BREY7QUFLRDs7OztFQW5FbUMsZ0JBQU1FLFM7O2tCQUF2QnRCLFEiLCJmaWxlIjoiMzYwLmpzIiwic291cmNlc0NvbnRlbnQiOlsicmVxdWlyZSgnbm9ybWFsaXplLmNzcy9ub3JtYWxpemUuY3NzJyk7XG4vL3JlcXVpcmUoJ3N0eWxlcy9ib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLmNzcycpO1xuLy9yZXF1aXJlKCcuLi8uLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJyk7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbnRyYWRhcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZGF0b3M6IDAsXG4gICAgICBlc3RhZG9zOiAnMScsXG4gICAgICBhbGZhYmV0b3M6ICcxJ1xuICAgIH07XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmNhbWJpYW5kb0VzdGFkby5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5jYW1iaWFuZG9BbGZhYmV0by5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY2FtYmlhbmRvRXN0YWRvPShldmVudCk9PntcbiAgICBjb25zb2xlLmxvZygncHJpbWVyIHZhbG9yIScgKyB0aGlzLnN0YXRlLmVzdGFkb3MpO1xuICAgIGxldCB2YWxvciA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLnNldFN0YXRlKHtlc3RhZG9zOiBldmVudC50YXJnZXQudmFsdWV9KTtcbiAgICBjb25zb2xlLmxvZygnU2VndW5kbyB2YWxvciEnICsgdmFsb3IpO1xuICAgIHZhciBwYWdpbmEgPSB0aGlzLnN0YXRlLmRhdG9zO1xuICAgIHRoaXMuc2V0U3RhdGUoe2RhdG9zOihwYWdpbmErMSl9KTtcbiAgfVxuXG4gIGNhbWJpYW5kb0FsZmFiZXRvPShldmVudCk9PntcbiAgICBjb25zb2xlLmxvZygncHJpbWVyIHZhbG9yIScgKyB0aGlzLnN0YXRlLmFsZmFiZXRvcyk7XG4gICAgbGV0IHZhbG9yYSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLnNldFN0YXRlKHthbGZhYmV0b3M6IGV2ZW50LnRhcmdldC52YWx1ZX0pO1xuICAgIGNvbnNvbGUubG9nKCdTZWd1bmRvIHZhbG9yIScgKyB2YWxvcmEpO1xuICAgIHZhciBwYWdpbmEgPSB0aGlzLnN0YXRlLnBhZ2U7XG4gICAgdGhpcy5zZXRTdGF0ZSh7cGFnZToocGFnaW5hKzEpfSk7XG4gICAgY29uc29sZS5sb2coJ3BhZ2luYSAnICsgcGFnaW5hKTtcbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIGxldCB2aXN0YTtcbiAgICBpZih0aGlzLnN0YXRlLmRhdG9zID09PSAwKXtcbiAgICAgIHZpc3RhID0gKDxkaXY+XG4gICAgICAgIDxoMj5EYXRvcyBkZSBlbnRyYWRhIHBhcmEgdCZ1YWN1dGU7IGFmZDwvaDI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgIDxsYWJlbCBmb3I9XCJcIj5OJnVhY3V0ZTttZXJvIGRlIGVzdGFkb3MgKFEpOjwvbGFiZWw+XG4gICAgICAgICAgPHNlbGVjdCB2YWx1ZT17dGhpcy5zdGF0ZS5lc3RhZG9zfSBvbkNoYW5nZT17dGhpcy5jYW1iaWFuZG9Fc3RhZG99IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJcIj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCI+cTA8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyXCI+cTE8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIzXCI+cTI8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI0XCI+cTM8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI1XCI+cTQ8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI2XCI+cTU8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI3XCI+cTY8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI4XCI+cTc8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI5XCI+cTg8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxMFwiPnE5PC9vcHRpb24+XG4gICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8bGFiZWwgZm9yPVwiXCI+RWxlbWVudG9zIGRlbCBhbGZhYmV0byAoJlNpZ21hOyk6PC9sYWJlbD5cbiAgICAgICAgICA8c2VsZWN0IHZhbHVlPXt0aGlzLnN0YXRlLmFsZmFiZXRvfSBvbkNoYW5nZT17dGhpcy5jYW1iaWFuZG9BbGZhYmV0b30gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cIlwiPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjFcIj5hPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMlwiPmI8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIzXCI+Yzwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjRcIj5kPC9vcHRpb24+XG4gICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+KVxuICAgIH1cbiAgICByZXR1cm4oXG4gICAgICA8ZGl2PlxuICAgICAgICB7dmlzdGF9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9FbnRyYWRhcy5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})