const PREFIX = 'cat-';

function join(name: string, mods: Array<string | number>): string {
  name = PREFIX + name;
  mods = mods.map(mod => {
    return name + '--' + mod;
  });
  mods.unshift(name);

  return mods.join(' ');
}

function traversing(mods: Array<string | number>, conf: any) {
  if (!conf) {
    return;
  }

  if (typeof conf === 'string' || typeof conf === 'number') {
    mods.push(conf);
  } else if (Array.isArray(conf)) {
    conf.forEach(item => {
      traversing(mods, item);
    });
  } else if (typeof conf === 'object') {
    Object.keys(conf).forEach(key => {
      conf[key] && mods.push(key);
    });
  }
}

export function bem(name: string, conf: unknown): string {
  const mods: Array<string | number> = [];
  traversing(mods, conf);

  return join(name, mods);
}
