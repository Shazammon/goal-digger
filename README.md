# goal-digger

Bucket List Application

## Description

A one stop shop for all your bucket list ideas! Plan your future goals and keep track of those completed. See other's goals and steal them for your own ideas.

## Wireframe

- Landing page 1 - Bucket list options
  ![Landing Page](public/Landing-page.png)

- Landing page 2 - more options
  ![Landing Page 2](public/Landing-page-2.png)

- Profile View - view your basic profile information and your lists
  ![Profile View](public/Profile-view.png)

- Goals View - view your saved goals and lists
  ![Goals View](public/Goals-View.png)

## ERD

![ERD](public/ERD.png)

## RESTful Routes

### Bucketlist Goals

| HTTP METHOD (_Verb_) | URL (_Nouns_)             | CRUD | Response                                              | Notes |
| -------------------- | --------------            | ---- | ----------------------------------------------------- | ----- |
| GET                  | /                         | R    | show page of bucketlist items from the bucketlist API |       |

### Users

| HTTP METHOD (_Verb_) | URL (_Nouns_)        | CRUD | Response                                                   | Notes |
| -------------------- | -------------------- | ---- | ---------------------------------------------------------- | ----- |
| GET                  | /users/new           | R    | a form for creating a new user                             |       |
| POST                 | /users               | C    | create new user                                            |       |
| GET                  | /users/:id           | R    | show user's profile including their goal lists             |       |
| PUT                  | /users/:id           | U    | edit the user's profile                                    |       |
| GET                  | /users/login         | R    | show a login form                                          |       |
| POST                 | /users/login         | C    | accept a payload of form data and use it to login the user |       |
| GET                  | /users/logout        | R    | logout a user by clearing the stored cookie                |       |

### Bucketlist Goals

| HTTP METHOD (_Verb_) | URL (_Nouns_)             | CRUD | Response                                              | Notes |
| -------------------- | --------------            | ---- | ----------------------------------------------------- | ----- |
| POST                 | /goals/:goalId/inprogress | C    | add goal to user's in progress bucketlist             |       |
| DELETE               | /goals/:goalId/inprogress | D    | remove goal from user's in progress bucketlist        |       |
| POST                 | /goals/:goalId/completed  | C    | add goal to user's completed bucketlist               |       |
| DELETE               | /goals/:goalId/completed  | D    | remove goal from user's completed bucketlist          |       |
| POST                 | /goals                    | U    | create a new goal                                     |       |
| PUT                  | /goals/:goalId            | U    | edit a goal                                           |       |

## User Stories

- As an unregistered user, I would like to sign up with email and password.
- As a registered user, I would like to sign in with email and password.
- As a signed in user, I would like to change password.
- As a signed in user, I would like to sign out.
- As a signed in user, I would like to create a list item with a title and description.
- As a signed in user, I would like to update my list item's title and description.
- As a signed in user, I would like to delete my list item.
- As a signed in user, I would like to see all my list items but not other users'.
- As a signed in user, I would like to cross off items to complete them.

## MVP

- Set up react client with routes
- Set up mongoose server
- Set up user authentication with password encryption
- Set up CRUD functionality for user
- Set up CRUD functionality for bucket list goal
- Add a carousel on the home page that rotates through different bucket list ideas
- Show a page of bucket list ideas
- Show the users profile with all bucket list goals they have been added.

## Stretch Goals

- See other peoples profiles with their added bucket list goals
- Be able to favorite other's bucket list goals and add that to the users own profile list
- Be able to leave comments on goals
