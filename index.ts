import {reaction, observable} from 'mobx';

class Something {
    @observable public foo: string = 'empty';
}

const s = new Something();

reaction(() => s.foo, () => console.log('foo changed to', s.foo));

for (const i of Array(100)) {
    s.foo = Math.random().toString(36).substring(3);
}
