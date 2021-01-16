# Dark Neumorphic React Components by Eric Echemane

## STYLE
I used `SASS` for the styling of the components.

### Major variables in SASS for the theme
This variables will help you in styling the components through props.

For the Background Color
- `$b-prime`  : dark blue (#243441)
- `$b-accent` : close to cyan (#0AFFEF)
- `$b-error`  : close to crimson (#FF555D)

For the foreground Color
- `$f-color1` : main text color (#FFFFFF)
- `$f-color2` : just white but 40% transparent rgba(255,255,255,.4)

## Classes
There are a lot of classes that you will see as a prop's value on the following APIs that styles the components. You can check that in `sass folder` or `main.css`.


## Components API
The following APIs will show you how to style the components

### Buttons
*By default*, all button components have the following properties
|    props    | default value | other values | required |
|-------------|---------------|--------------|----------|
| label       | null          | any string   | yes      |
| disable     | false         | boolean      | not      |
| title       | null          | any string   | not      |
| handleClick | null          | any function | yes      |
| id          | null          | any string   | yes      |

`<Button />` and `<ButtonText />`
props : default

`<ButtonAccent />`
props : default plus additional below
| props       | default value | other values      | required |
|-------------|---------------|-------------------|----------|
| type        | null          | "accent", "error" | yes      |
if the `type` is not specified the background color of the button will be `b-prime`.

`<ButtonWithIcon />`
props : default plus additional below
| props       | default value | other values             | required |
|-------------|---------------|--------------------------|----------|
| icon        | null          | any react Icon component | yes      |

`<IconButton />`
props : default plus additional below
| props       | default value | other values             | required |
|-------------|---------------|--------------------------|----------|
| color       | "white"       | "b-accent", "b-error"    | yes      |

`<RoundButton />`
props : default plus additional below
| props       | default value | other values             | required |
|-------------|---------------|--------------------------|----------|
| color       | null          | "accent", "error"        | not      |
| icon        | null          | any react Icon component | yes      |

`<ToggleButton />`
| props       | default value | other values      | required |
|-------------|---------------|-------------------|----------|
| title       | null          | any string        | not      |
| color       | null          | "accent", "error" | yes      |
| id          | null          | any string        | yes      |

### Inputs

`<Slider />`
| props       | default value | other values      | required |
|-------------|---------------|-------------------|----------|
| title       | null          | any string        | not      |
| color       | null          | "accent", "error" | yes      |
| id          | null          | any string        | yes      |
| min         | null          | positive integer  | yes      |
| max         | null          | positive integer  | yes      |
| disable     | false         | boolean           | not      |
| onInput     | null          | function          | yes      |

*Notes:*
- `max` props is always synced to the width of the input in pixels. Example: if `max={300}` then the width of the actual range input is `300px`.
- `id` should be unique among all elements in the DOM, otherwise the app might break.
- `onInput` is require. If you dont provide the function, the application might break.


`<TextInput />`
| props       | default value | other values         | required |
|-------------|---------------|----------------------|----------|
| id          | null          | any string           | yes      |
| disable     | false         | boolean              | not      |
| placeHolder | null          | any string           | yes      |
| type        | null          | "text" or "password" | yes      |
| error       | false         | boolean              | not      |
| fullWidth   | false         | boolean              | not      |

`<Radio />`
| props       | default value | other values         | required |
|-------------|---------------|----------------------|----------|
| checked     | false         | boolean              | not      |
| disabled    | false         | boolean              | not      |
| color       | "accent"      | "error"              | not      |
| name        | null          | string               | yes      |
| value       | null          | string or number     | yes      |
| label       | null          | string               | yes      |

`<CheckBox />`
| props       | default value | other values         | required |
|-------------|---------------|----------------------|----------|
| checked     | false         | boolean              | not      |
| disabled    | false         | boolean              | not      |
| color       | "accent"      | "error"              | not      |
| value       | null          | string or number     | yes      |
| id          | null          | string               | yes      |
| label       | null          | string               | yes      |