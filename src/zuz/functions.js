const generateID = (len, g) => {
    const s = (g) => {
        var text = "",
        possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for(let i = 0; i < g; i++){
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }
    var id = s(g);
    if(len > 1){
        for(let n = 0; n < len; n++){
            id += "-" + s(g);
        }
    }
    return id;
}

const ZuzToast = function(){
    let self = this;
    self._toasts = [];
    self._container = null;

    const _Toast = (options) => {
        var tout = null,
        ID = 'zuz-toast-' + generateID(5, 4),
        toast = document.createElement('div'),
        btn = document.createElement('button');

        toast.id = ID;
        toast.classList = 'zuz-toast fixed flex fontn anim s14 aic';
        toast.innerHTML = options.html || "Fancy Toast";

        btn.className = "fontb s15";
        btn.textContent = options.btnTxt || "OK";
        btn.addEventListener("click", ()=>{ _dismiss(); });

        toast.appendChild(btn);
        self._container.appendChild(toast);
        setTimeout(()=>{
            toast.classList.add("zuz-toast-visible");            
            self.arrangeToasts(()=>{
                tout = setTimeout(()=>{
                    _dismiss();
                }, (options.time || 5) * 1000);
            });
        }, 50);

        const _dismiss = () => {
            tout && clearTimeout(tout);
            toast.classList.remove('zuz-toast-visible');
            toast.classList.add('zuz-toast-hidden');
            tout = setTimeout(() => {
                document.getElementById(ID).parentNode.removeChild(document.getElementById(ID));
            }, 1000);
        }

    }

    self.createContainer = () => {
        var container = document.createElement('div');
        container.id = 'toast-container';
        document.body.appendChild(container);
        self._container = container;
    }

    self.moveToast = (toast, bottom) => {
        toast.style.bottom = bottom + 'px';
    }

    self.arrangeToasts = (callback) => {
        var toasts = document.querySelectorAll(".zuz-toast"),
        bottom = 20, i = toasts.length;
        while(i--){
            toasts[i].classList.add('n-'+i);
            self.moveToast(toasts[i], bottom);
            bottom += parseInt(getComputedStyle(toasts[i]).height.replace("px")) + 30;
        }
        callback && callback();
    }

    self.show = (options) => {
        self._container == null && self.createContainer();
        _Toast(options);
    }

    self.dismisAll = () => {
        var toasts = document.querySelectorAll(".zuz-toast"),
        i = toasts.length;
        while(i--){
            toasts[i].parentNode.removeChild(toasts[i]);
        }
    }

}

const Toast = new ZuzToast();

export default {
    generateID,
    Toast
}