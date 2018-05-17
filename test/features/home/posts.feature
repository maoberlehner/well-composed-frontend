Feature: Home: Posts

Scenario: List posts

  Given I open the `home page`
  Then I see a `post list`

Scenario: Load new current post

  Given the "Post" query returns a `default` response
  And I open the `home page`
  When I enter "1" in `post id`
  And I click the `load post button`
  Then I expect the text "Mock Title" to be present
