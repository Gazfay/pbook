interface Icons {
  [key: string]: string;
}

const Icons: Icons = {
  gas: 'fire',
  water: 'blood-drop',
  electricity: 'flash',
  managment: 'home',
  communication: 'world-o',
};

function getIconByEntityType(type: string) {
  return Icons[type];
}

export default getIconByEntityType;
