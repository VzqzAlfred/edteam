const Component = (function () {
    // Creamos el Constructor del Componente.
    const Constructor = function(options){
        this.el = options.el;
        this.data = options.data;
        this.template = options.template;
    };

    // Agregando los métodos al prototipo del constructor del componente

    // 1. Render UI
    Constructor.prototype.render = function(){
        const $el = d.querySelector(this.el);
        if (!$el) return;
      
        $el.innerHTML = this.template(this.data);

        console.log(this.data);
    };


    // 2. Actualizar el State de forma reactiva
    Constructor.prototype.setState = function(obj){
        for (let key in obj) {
            if (this.data.hasOwnProperty(key)) {
                this.data[key] = obj[key];
            }
          }
        
          this.render();
    };


    // 3. Obtenemos una copia inmutable del State
    Constructor.prototype.getState = function(){
        return JSON.parse(JSON.stringify(this.data));
    };

    return Constructor;
})();