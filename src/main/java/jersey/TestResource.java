package jersey;

import com.google.common.collect.ImmutableList;
import com.google.common.collect.ImmutableMap;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.Map;

@Path("test")
@Produces(MediaType.APPLICATION_JSON + "; charset=utf-8")
public class TestResource {

   @GET
   @Path("all")
   public Object getAll() {
      return ImmutableList.of(
         named("one"),
         named("two"),
         named("three")
      );
   }

   private Map<String, String> named(String value) {
      return ImmutableMap.of("name", value);
   }
}
