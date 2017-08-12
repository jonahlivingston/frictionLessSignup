export const NEXT_PHOTO = 'NEXT_PHOTO'; 
export const PREVIOUS_PHOTO = 'PREVIOUS_PHOTO';

export const nextPhoto = (index) => ({
  type: NEXT_PHOTO,
  index,
});

export const previousPhoto = (index) => ({
  type: PREVIOUS_PHOTO,
  index,
});
